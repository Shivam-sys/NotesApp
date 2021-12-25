import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
const Notes=() =>{
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className="flex gap-2 border-2 flex-wrap">
        {notes.map((note) => {
          return <Noteitem tag={note.tag} title={note.title} description={note.description} date={note.date}/>;
        })}
      </div>
    </>
  );
}

export default Notes;
