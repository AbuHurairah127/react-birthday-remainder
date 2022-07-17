import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBirthday from "../pages/addBirthday/AddBirthday";
import Home from "../pages/home/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-birthday" element={<AddBirthday />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
