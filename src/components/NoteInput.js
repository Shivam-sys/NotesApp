import React, { useContext, useState } from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";

const NoteInput = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleAdd = (e) => {
    e.preventDefault(); //page won't reload on click may be emmited coz I am not using button type submit
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="border-0 rounded-t-lg mx-0 my-2 md:mx-2 lg:float-left flex flex-col bg-gray-900 lg:w-1/3 myfont-1 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
        <input
          type="text"
          className="border-0 p-5 rounded-t-lg focus:ring-0 bg-inherit"
          id="input_title"
          name="title"
          placeholder="Title"
          spellCheck="false"
          autoComplete="off"
          onChange={onChange}
        />
        <hr className="myhr" />
        <textarea
          className="border-0 p-5 focus:ring-0 bg-inherit"
          id="input_desc"
          name="description"
          rows="10"
          placeholder="Description"
          spellCheck="false"
          autoComplete="off"
          onChange={onChange}
        ></textarea>
        <div className="w-full flex gap-[1px]">
          <input
            className="border-0 p-1  bg-slate-700 focus:ring-0 w-1/3 focus:outline-none text-gray-300"
            placeholder="Tag1"
          />
          <input
            className="border-0 p-1  bg-slate-700 focus:ring-0 w-1/3 focus:outline-none text-gray-300"
            placeholder="Tag2"
          />
          <input
            className="border-0 p-1  bg-slate-700 focus:ring-0 w-1/3 focus:outline-none text-gray-300"
            placeholder="Tag3"
          />
        </div>
        <button
          className="w-full h-16 bg-teal-600 hover:bg-teal-500 text-xl rounded-b-lg"
          type="submit"
          onClick={handleAdd}
        >
          Add note
        </button>
      </div>
    </>
  );
};

export default NoteInput;
