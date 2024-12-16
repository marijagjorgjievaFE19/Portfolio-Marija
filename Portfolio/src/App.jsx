import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Education from "./Pages/Education/Education.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
