import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:3001/api";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //function to get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNmRlZjllNmQwYWQ3NGM1ZGQxNTYzIn0sImlhdCI6MTY0MDQyMzU0Nn0.UZSjLIsGhg-ryvSq_f78BiCB29JjOzzQJR3Rni_81yc",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //function to add a new note
  const addNote = async (title, description, tag) => {
    // Make API call
    const response = await fetch(`${host}/notes/addnote`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNmRlZjllNmQwYWQ3NGM1ZGQxNTYzIn0sImlhdCI6MTY0MDQyMzU0Nn0.UZSjLIsGhg-ryvSq_f78BiCB29JjOzzQJR3Rni_81yc",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const resp = response.json(); //to store the respose in a const
    //Logic for client side
    console.log("adding a new note");
    let note = {
      _id: "61c6e346ae3b1c1993610addd" + title,
      user: "61c6def9e6d0ad74c5dd1563",
      title: title,
      description: description,
      tag: tag,
      date: "2021-12-26T09:24:22.727Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Function to edit a note
  const editNote = async (id, title, description, tag) => {
    //API :
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNmRlZjllNmQwYWQ3NGM1ZGQxNTYzIn0sImlhdCI6MTY0MDQyMzU0Nn0.UZSjLIsGhg-ryvSq_f78BiCB29JjOzzQJR3Rni_81yc",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const resp = response.json(); //to store the respose in a const
    //Logic to edit on client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  const deleteNote = async (id) => {
    //API:
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNmRlZjllNmQwYWQ3NGM1ZGQxNTYzIn0sImlhdCI6MTY0MDQyMzU0Nn0.UZSjLIsGhg-ryvSq_f78BiCB29JjOzzQJR3Rni_81yc",
      },
    });
    const resp = await response.json(); //to store the respose in a const
    console.log(resp);
    //Logic for client side
    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
