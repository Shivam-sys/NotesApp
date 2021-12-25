import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61c1f8c08a86c4b251d21bdb",
      user: "61c1f8508a86c4b251d21bd7",
      title: "updated note title",
      description: "Updated description",
      tag: "updated",
      date: "2021-12-21T15:54:40.354Z",
      __v: 0,
    },
    {
      _id: "61c4a57cdb74a040c1fab437",
      user: "61c1f8508a86c4b251d21bd7",
      title: "Note title",
      description:
        "Note descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNotdescriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNote descriptionNot",
      tag: "tag",
      date: "2021-12-23T16:36:12.114Z",
      __v: 0,
    },
    {
      _id: "61c1f8c08a86c4b251d21bdb",
      user: "61c1f8508a86c4b251d21bd7",
      title:
        "updated note title jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkk",
      description: "Updated description",
      tag: "updated",
      date: "2021-12-21T15:54:40.354Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
