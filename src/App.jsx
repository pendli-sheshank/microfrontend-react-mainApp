import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/pages/AppRoutes";

const currentYear = "2023";
const navigation = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header navigations={navigation} year={currentYear} />
      <AppRoutes />
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
