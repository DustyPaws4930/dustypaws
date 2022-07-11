import mongoose from "mongoose";
import dayjs from "dayjs";

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
    type: [],
  },
  role: {
    type: String,
    default: "user",
  },
  whistlist: {
    type: [],
  },

  createdAt: {
    type: Date,
    default: dayjs().format("YYYY-MM-DD"),
  },
  selectedEmoji: {
    type: String,
    default: "Bird",
  },
});

const User = mongoose.model("User", userModel);
export default User;
