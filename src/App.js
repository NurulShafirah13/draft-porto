import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArtSkills from "./pages/Skills/ArtSkills";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences/Experiences";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.scss"; // global style

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/artSkills" element={<ArtSkills />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
