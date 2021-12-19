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
module.exports = router;
