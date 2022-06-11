import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login />} />
          <Route path="/signup" caseSensitive={false} element={<SignUp />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/about" caseSensitive={false} element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
