import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";
import DetailPage from "../Home/DetailPage";

const UserRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default UserRoute;
