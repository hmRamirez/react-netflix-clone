import React from "react";
("react-router-dom");
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Movie from "./pages/Movie";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie/*" element={<Movie />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
