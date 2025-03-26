import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/home/Home.jsx";
import { AboutMe } from "./pages/about-me/AboutMe.jsx";
import { Skills } from "./pages/skills/Skills.jsx";
import { Projects } from "./pages/projects/Projects.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { MediaQ } from "./pages/mediaq/MediaQ.jsx";
import Layout from "./components/layout/Layout.jsx";
import "./App.css";
import PositionedScene from "./components/layout/PositionedScene.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mediaq" element={<MediaQ />} />
        </Route>
      </Routes>
      <PositionedScene />

    </>
  );
}
export default App;