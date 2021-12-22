import NoteContext from "./noteContext";
// import { useState } from "react";
const NoteState = (props) => {
  return (
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
