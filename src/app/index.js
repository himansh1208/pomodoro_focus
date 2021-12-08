import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/home";
import "../assets/css/style.css"
import "../assets/css/bootstrap.min.css"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home/primary" element={<Home color={"blue"} />} />
        <Route exact path="/home/secondary" element={<Home color={"green"} />} />
        <Route path="/" element={<Navigate to ="/home/primary" />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
