const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = Schema({
  title: String,
  description: String,
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
