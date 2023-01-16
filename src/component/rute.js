import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Index from "../pages";
import Aboutme from "../pages/aboutme";
import Home from "../pages/home";
function Rute() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/about//*"  element={<Aboutme />} />
     </Routes>
  );
}

export default Rute;

