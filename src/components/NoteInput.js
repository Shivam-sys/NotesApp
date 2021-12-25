import React from "react";
import "../App.css";
const NoteInput = () => {
  return (
    <>
      <div className="border-0 rounded-lg mx-0 my-2 md:mx-2 lg:float-left flex flex-col bg-gray-900 lg:w-1/3 myfont-1 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
        <input
          type="text"
          className="border-0 p-5 rounded-t-lg focus:ring-0 bg-inherit"
          id="input_title"
          placeholder="Title"
          spellCheck="false"
          autoComplete="off"
        />
        <hr className="myhr" />
        <textarea
          className="border-0 p-5 rounded-b-lg  focus:ring-0 bg-inherit"
          id="input_desc"
          rows="10"
          placeholder="Description"
          spellCheck="false"
          autoComplete="off"
        ></textarea>
      </div>
    </>
  );
};

export default NoteInput;
