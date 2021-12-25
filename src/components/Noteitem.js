import React from "react";
import "../App.css";

const Noteitem = (props) => {
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
      <div className="text-gray-400 p-5 mt-2 lg:[width:49%] max-w-prose w-full myfont-1 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg border-2 border-pink-500">
        {/* <div className=" border-2 flex flex-wrap -mx-4 -my-8 border-yellow-400"> */}
        {/* <div className="py-4 px-2 w-full border-2 flex flex-wrap border-red-500"> */}
        <div className="flex items-start p-2 gap-1 border-2 border-blue-500 w-full">
          <div className="flex-shrink-0 flex flex-col text-center leading-none border-2 border-green-900 myfont-1 w-2/12">
            <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">
              {`${dt.getFullYear()} ${month[dt.getMonth()]}`}
            </span>
            <span className="font-medium text-lg leading-none text-gray-300">
              {dt.getDate()}
            </span>
          </div>
          <div className="pl-3 border-2 border-green-500 w-10/12">
            <h2 className="tracking-widest break-all text-xs font-medium text-red-400 mb-1">
              {props.tag}
            </h2>
            <p className="text-xl break-all font-medium text-red-300 mb-3 truncate text-ellipsis border-2">
              {props.title}
            </p>
            <p className="lg:leading-relaxed">
              {props.description.slice(0, 100) +
                (props.description.length > 100 ? "..." : "")}
            </p>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Noteitem;
