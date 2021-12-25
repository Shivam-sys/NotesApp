import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "../App.css";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className="custom-scroll flex gap-2 flex-wrap md:h-[88vh] md:overflow-y-scroll md:overflow-x-hidden rounded-sm">
        {notes.map((note) => {
          return (
            <Noteitem
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
