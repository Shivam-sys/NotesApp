import React, { useContext } from "react";
import NoteInput from "./NoteInput";
import noteContext from "../context/notes/noteContext";

export const Home = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div>
        <NoteInput />
        {notes}
      </div>
    </>
  );
};

export default Home;
