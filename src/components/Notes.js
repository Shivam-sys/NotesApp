import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "../App.css";
const Notes = () => {
  const context = useContext(noteContext);
  // const { notes, addNote } = context;
  const { notes } = context;
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
