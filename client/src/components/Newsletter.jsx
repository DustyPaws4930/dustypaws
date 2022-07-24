import React, { useState } from "react";
import { isValidEmail } from "../Common";
import { toast } from "react-toastify";

const Newsletter = () => {
  let [emailNews, setEmailNews] = useState("");
  return (
    <div>
      <section className="newsletter">
        <div className="newsletter-wrapper">
          <h4>Join Our Newsletter</h4>
          <p>
            Keep yourself updated with latest event and affairs. Subscribe our
            news letter by providing your
          </p>
          <div>
            <input
              type="email"
              name="newsletter-email"
              id="newsletterEmail"
              value={emailNews}
              pattern=".+@gmail\.com"
              onChange={(e) => {
                setEmailNews(e.target.value);
              }}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              onClick={(e) => {
                if (
                  emailNews !== "" &&
                  emailNews !== undefined &&
                  isValidEmail(emailNews)
                )
                  toast.success("You are subscribed for the newsletters", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                  });
                else {
                  toast.error("Enter the valid email", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                  });
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
