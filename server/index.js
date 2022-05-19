import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

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
const connection_URL = `mongodb+srv://shubham_mern:shubham_mern123@cluster0.kfluk.mongodb.net/DustyPaws?retryWrites=true&w=majority`;
// This will also move to the .env file
const PORT = process.env.PORT || 5000;

// SV: Connecting the mongoose.
mongoose
  .connect(connection_URL, {
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
