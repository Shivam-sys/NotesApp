import React from "react";
import NoteInput from "./NoteInput";
import Notes from "./Notes";

export const Home = () => {
  return (
    <>
      <div>
        <NoteInput />
        <Notes/>
      </div>
    </>
  );
};

export default Home;
