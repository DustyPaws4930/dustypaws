import React from "react";

const Info = () => {
  return (
    <div className="userInfoContainer">
      <div className="headerContainer">
        <h1>User Info</h1>
      </div>
      <div className="formWrapper">
        <h3>About</h3>

        <div className="containerInfoWrapper">
          <h5>Contact Information</h5>
          <div className="labelInputWrapper">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>

          <div className="labelInputWrapper">
            <label htmlFor="phonenumber">Phone Number</label>
            <input type="text" name="phonenumber" id="phonenumber" />
          </div>

          <div className="labelInputWrapper">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="AddressInfoContainer">
            <fieldset>
              <legend>Address</legend>
              <div className="labelInputWrapper">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" />
              </div>
              <div className="labelInputWrapper">
                <label htmlFor="province">state</label>
                <input type="text" name="province" id="province" />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="basicInfoWrapper">
          <h5>Basic Information</h5>

          <div className="labelInputWrapper">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>

          <div className="labelInputWrapper">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="name">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Non-Binary</option>
              <option value="prefernotsay">Prefer not to respond</option>
            </select>
          </div>
        </div>
        <div className="securityWrapper">
          <h5>Security and Privacy</h5>

          <div className="labelInputWrapper">
            <label htmlFor="password">Update Password</label>
            <input type="text" name="password" id="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
