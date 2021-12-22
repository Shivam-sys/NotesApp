import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user" element={<User />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
