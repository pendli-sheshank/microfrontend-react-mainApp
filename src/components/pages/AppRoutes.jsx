import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "projects/Projects";
import Contact from "contact/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
      <Route exact path="/skills" element={<div>Skills</div>} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;
