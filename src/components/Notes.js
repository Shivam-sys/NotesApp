import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "../App.css";
import { useEffect } from "react";
const Notes = () => {
  const context = useContext(noteContext);
  // const { notes, addNote } = context;
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  },[10000]);
  return (
    <>
      <div className="custom-scroll flex gap-x-2 flex-wrap md:max-h-[88vh] md:overflow-y-scroll md:overflow-x-hidden rounded-sm">
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              id={note._id}
              tag={note.tag}
              title={note.title}
              description={note.description}
              date={note.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
