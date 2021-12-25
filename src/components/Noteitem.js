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
              <h2 className="tracking-widest break-all truncate text-xs font-medium text-red-400 mb-1 myfont-2">
                {props.tag}1<br />
                {props.tag}2<br />
                {props.tag}3<br />
              </h2>
            </div>
          </div>
          <div className="pl-3 w-10/12">
            {/* <h2 className="tracking-widest break-all text-xs font-medium text-red-400 mb-1">
              {props.tag}
            </h2> */}
            <p className="text-xl break-all font-medium text-red-300 mb-3 truncate text-ellipsis" title={props.title}>
              {props.title}
            </p>
            <p className="lg:leading-relaxed">
              {props.description.slice(0, 100) +
                (props.description.length > 100 ? "..." : "")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;