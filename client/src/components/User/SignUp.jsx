import axios from "axios";
import React, { useState } from "react";
import { getApiPath } from "../../Common";
import jwt from "jwt-decode";
const SignUp = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [cPassword, setConfirmPassword] = useState("");

  const HandleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "cpassword") {
      setConfirmPassword(value);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password === cPassword) {
      const SignUPURL = getApiPath() + "user/signup";
      axios
        .post(SignUPURL, user)
        .then((res) => {
          window.location.href = "/";
          const user = jwt(res.data.user); // decode your token here
          alert("Logged in!!");
          localStorage.setItem("token", user.user);
          console.log("user", user.user);
        })
        .catch((err) => {
          console.log(err);
          alert(`Err: ${err}`);
        });
    } else {
      alert("Password does not match");
    }
  };

  return (
    <>
      <h1>Sign Up page</h1>{" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="labelInputWrapper">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            id="fname"
            onChange={(event) => HandleInputChange(event)}
            placeholder="First Name"
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            value={user.lname}
            id="lname"
            onChange={(event) => HandleInputChange(event)}
            placeholder="Last Name"
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            id="email"
            placeholder="Email"
            onChange={(event) => HandleInputChange(event)}
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            placeholder="Password"
            onChange={(event) => HandleInputChange(event)}
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="text"
            name="cpassword"
            id="cpassword"
            value={cPassword}
            onChange={(event) => HandleInputChange(event)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            value={user.phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            onChange={(event) => HandleInputChange(event)}
            placeholder="Phone Number"
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={user.address}
            name="address"
            onChange={(event) => HandleInputChange(event)}
            id="address"
            placeholder="Address"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SignUp;
