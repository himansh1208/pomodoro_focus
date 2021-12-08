import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/home";
import './../assets/css/bootstrap.min.css'
import './../assets/css/style.css'
import { useLocation } from "react-router";

const App = () => {
  const {pathname} =useLocation()
  
console.log("uselocation:",pathname)
  return (
    <>
      <Header color={pathname==="/home/primary" ? "#02044a":"#024A46"}/>
      <Routes>
        <Route path="/home/primary" element={<Home color={"#02044a"} />} />
        <Route exact path="/home/secondary" element={<Home color={"#024A46"} />} />
        <Route path="/" element={<Navigate to="/home/primary" />} />
      </Routes>
      <Footer color={pathname=="/home/primary"?"#02044a":"#024A46"}/>
    </>
  );
};

export default App;
