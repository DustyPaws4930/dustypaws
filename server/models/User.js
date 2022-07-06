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
    type: String,
  },
  rewardsEarned: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    default: "user",
  },
  whistlist: {
    type: Array,
    default: [],
  },
  default: [],
});

const User = mongoose.model("User", userModel);
export default User;
