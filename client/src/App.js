import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/User/Login";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Login />} />
          <Route path="/home" caseSensitive={false} element={<Home />} />
          <Route path="/about" caseSensitive={false} element={<About />} />          
        </Routes>
      </Router>
    </>
  );
};

export default App;
