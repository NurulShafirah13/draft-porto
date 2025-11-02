import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";
// import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
