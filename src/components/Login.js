import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const host = "http://localhost:3001/api";
  const handleSignin = async (e) => {
    e.preventDefault(); //Prevent page refreshing on submit
    const response = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
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
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex justify-center" onSubmit={handleSignin}>
      <div className=" w-full bg-opacity-30 bg-black md:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
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
            value={credentials.email}
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
            value={credentials.password}
            onChange={onChange}
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-gray-300 hover:text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-300 hover:text-white "
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </form>
  );
}

export default Login;
