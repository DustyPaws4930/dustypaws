import mongoose from "mongoose";

let userModel = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  Dob: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  address: {
    type: Object,
  },
  rewardsEarned: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userModel);
export default User;
