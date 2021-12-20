const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUTE 4: Get all the notes using: GET "/api/auth/fetchuser", login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error, Cannot get any note!");
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
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error, Cannot create a note.");
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
        return res.status(404).send("Not found!");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error, Cannot create a note.");
    }
  }
);
module.exports = router;
