const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUTE 4: Get all the notes using: GET "/api/auth/fetchuser", login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    // $notes = myqdaqli_fetcharray("select * fro..")
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error, Cannot get any note!" });
  }
});

//ROUTE 5: Add a new note using: POST "/api/auth/addnote", login required
router.post(
  "/addnote",
  fetchuser,
  [body("description", "Cannot save a note without description").exists()],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if errors are there in validating req, return bad request and errors.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json({ success: "Note saved" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        error: "Error, Cannot create a note. Description is required!",
      });
    }
  }
);
//ROUTE 6: Update an existing note using: PUT "/api/auth/updatenote", login required
router.put(
  "/updatenote/:id",
  fetchuser,
  [body("description", "Cannot save a note without description").exists()],
  async (req, res) => {
    try {
      //if errors are there in validating req, return bad request and errors.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      //Find the note to be updated using note id and update it
      let note = await Note.findById(req.params.id);
      if (!Note) {
        return res.status(404).json({ error: "Note not found!" });
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).json({ error: "Not allowed" });
      }
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Error, Cannot create a note." });
    }
  }
);
//ROUTE 7 : Delete an existing note basis of note id using : DELETE "/api/notes/deletenote/:id" ->id is note id, login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //Find the note to be deleted using note id.
    let note = await Note.findById(req.params.id);
    if (!Note) {
      return res.status(404).json({ error: "Note not found!" });
    }
    //Check wether note owner is same as the person attempting to delete
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not allowed" });
    }
    //delete the note
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: "Note deleted" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Error, Cannot delete a note. Internal server error!" });
  }
});
module.exports = router;
