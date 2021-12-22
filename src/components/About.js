import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="text-white">
      Name: {a.state.name} <br />
      Roll: {a.state.roll}
    </div>
  );
};

export default About;
