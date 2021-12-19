const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const notes = mongoose.model("notes", NotesSchema); //this "notes is name of table/object you want to create in db"
module.exports = notes;
