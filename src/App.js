import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
