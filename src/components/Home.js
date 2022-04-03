import React from "react";
import NoteInput from "./NoteInput";
import Notes from "./Notes";

export const Home = () => {
  return (
    <>
      <div>
        <NoteInput width="1/3" />
        <Notes/>
      </div>
    </>
  );
};

export default Home;
