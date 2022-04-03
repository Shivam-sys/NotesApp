import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [info, setInfo] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();
  const host = "http://localhost:3001/api";
  const handleSignup = async (e) => {
    e.preventDefault(); //Prevent page refreshing on submit
    const response = await fetch(`${host}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: info.name,
        email: info.email,
        password: info.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert(`${json.error}`);
    }
  };
  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex justify-center" onSubmit={handleSignup}>
      <div className=" w-full bg-opacity-30 bg-black md:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="name"
            name="name"
            type="text"
            value={info.name}
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
            id="email"
            name="email"
            type="text"
            value={info.email}
            onChange={onChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3"
            id="password"
            name="password"
            type="password"
            value={info.password}
            onChange={onChange}
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-gray-300 hover:text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
