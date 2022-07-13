import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/AboutUs/About";
import Home from "./components/Home";
import Event from "./components/Event/Event";
import EventForm from "./components/Event/EventForm";
import SingleEvent from "./components/Event/SingleEvent";
import Profile from "./components/User/Settings/Profile";
// <<<<<<< Updated upstream
// =======
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import NGOSignUp from "./components/NGO/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";
import Pagination from "./components/PaginationComponent/Pagination";
import AllEvents from "./components/Event/AllEvents";
import AllReports from "./components/Complaint/AllReports";
import Donate from "./components/Donate/Donate";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" caseSensitive={false} element={<Login />} />
          <Route path="/signup" caseSensitive={false} element={<SignUp />} />
          <Route
            path="/pagination"
            caseSensitive={false}
            element={<Pagination />}
          />
          <Route
            path="/NGO/signup"
            caseSensitive={false}
            element={<NGOSignUp />}
          />
          <Route path="/" caseSensitive={false} element={<Home />} />

          <Route path="/about" caseSensitive={false} element={<About />} />

          <Route path="/report" caseSensitive={false} element={<Home />} />

          <Route path="/event" caseSensitive={false} element={<Event />} />

          <Route path="/donate" caseSensitive={false} element={<Donate />} />

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
          <Route
            path="/whishlistedEvents"
            caseSensitive={false}
            element={<AllEvents />}
          />
          <Route
            path="/allReports"
            caseSensitive={false}
            element={<AllReports />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
