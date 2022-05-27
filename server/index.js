import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//todo:  This will be removed from here
// import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

// SV: If you want to import the routes please do it from here.
import UserRoutes from "./routes/User.js";

// SV: Initializing the Application
const app = express();

// SV: Over here I have set up the bodyparser which is used to handle the request
// limit here is of 30mb so that images greater than that are not accepted ok.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// SV: Setting up database mongoose.
// This is the connection url Which I will move to that .env file so that no one has access to it.
// This will also move to the .env file
const PORT = process.env.PORT || 5000;

// SV: Connecting the mongoose.
mongoose
  .connect(process.env.connection_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
  })
  .catch((err) => {
    console.log(`Error Occured: ${err.message}`);
  });

// SV: Here are all my routes which you will also mention when any endpoint for the api is created.
app.use("/user", UserRoutes);

// let say you wanted to fetch the data but we need to first perform authentication.
// To do that

// app.use("/fetchsome", (req, res) => {
//   const token = req.headers["x-access-token"];
//   try {
//     const decodedToken = jwt.verify(token, "secret123");
//     const email = decodedToken.email;
//     // Then find the user using the email and then just proceed
//   } catch (err) {
//     console.log(err);
//   }
// });
