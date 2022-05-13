import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "../App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import NoteInput from "./NoteInput";
const Notes = () => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  // const { notes, addNote } = context;
  const { notes, getNotes } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  });
  // const updateNote = (note) => {
  //   ref.current.click();
  // };
  // const ref = useRef(null);
  return (
    <>
      {/* Update functionality disabled for now */}
      {/* <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"x-show="showModal2">
        <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
          <NoteInput width="full" />
        </div>
      </div> */}
      <div className="custom-scroll flex gap-x-2 flex-wrap md:max-h-[88vh] md:overflow-y-scroll md:overflow-x-hidden rounded-sm">
        {/* {if (notes.length===0) {} */}
        <div
          className={`text-4xl md:text-6xl mx-auto font-extrabold text-gray-500 ${
            notes.length === 0 ? "" : "hidden"
          }`}
        >
          No notes saved
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              id={note._id}
              tag={note.tag}
              title={note.title}
              description={note.description}
              date={note.date}
              // updateNote={updateNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
