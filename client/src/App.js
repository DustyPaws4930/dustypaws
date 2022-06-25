import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Event from "./components/Event/Event";
import EventForm from "./components/Event/EventForm";
import SingleEvent from "./components/Event/SingleEvent";
import Profile from "./components/User/Settings/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/login" caseSensitive={false} element={<Login />} /> */}
          {/* <Route path="/signup" caseSensitive={false} element={<SignUp />} /> */}
          <Route path="/" caseSensitive={false} element={<Home />} />

          <Route path="/about" caseSensitive={false} element={<About />} />

          <Route path="/report" caseSensitive={false} element={<Home />} />

          <Route path="/event" caseSensitive={false} element={<Event />} />

          <Route
            path="/singleEvent"
            caseSensitive={false}
            element={<SingleEvent />}
          />

          <Route
            path="/eventform"
            caseSensitive={false}
            element={<EventForm />}
          />
          <Route path="/profile" caseSensitive={false} element={<Profile />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
