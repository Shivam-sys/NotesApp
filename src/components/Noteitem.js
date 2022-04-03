import React, { useContext } from "react";
import "../App.css";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  // const { note } = props;
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dt = new Date(props.date);
  return (
    <>
      <div className="text-gray-400 p-5 mt-2 lg:[width:49%] w-full myfont-1 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg">
        <div className="flex items-start p-2 gap-1 w-full">
          <div className="w-2/12 flex flex-col">
            <div className="flex-shrink-0 flex flex-col text-center leading-none myfont-1">
              <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
                {`${dt.getFullYear()} ${month[dt.getMonth()]}`}
              </span>
              <span className="font-medium text-lg leading-none text-gray-300">
                {dt.getDate()}
              </span>
            </div>
            <div className="p-2">
              <h2 className="tracking-widest break-all text-center truncate text-xs font-medium text-red-400 mb-1 myfont-2">
                {props.tag}
              </h2>
            </div>
          </div>
          <div className="pl-3 w-10/12">
            <p
              className="text-xl break-all font-medium text-red-300 mb-3 truncate text-ellipsis"
              title={props.title}
            >
              {props.title}
            </p>
            <p className="lg:leading-relaxed">
              {props.description.slice(0, 100) +
                (props.description.length > 100 ? "..." : "")}
            </p>
            <div className="flex text-center">
              {/* *Note Update functionality issues. */}
              {/* <span
                className="w-[35px] p-1 hover:bg-teal-200 hover:border-0 hover:rounded-md hover:bg-opacity-20 cursor-pointer"
                Update
                functionality
                disabled
                onClick={() => {
                  props.updateNote(props.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square text-teal-500" />
              </span> */}
              <span
                className="w-[35px] p-1 hover:bg-red-200 hover:border-0 hover:rounded-md hover:bg-opacity-20 cursor-pointer"
                onClick={() => {
                  deleteNote(props.id);
                }}
              >
                <i className="fa-regular fa-trash-can text-red-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
