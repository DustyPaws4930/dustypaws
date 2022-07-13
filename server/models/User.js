import mongoose from "mongoose";
import dayjs from "dayjs";

import moment from 'moment';

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

  createdAt: {
    type: Date,
    default: moment(new Date()).toISOString(),
  },
  selectedEmoji: {
    type: String,
    default: "Bird",
  },
  whistlist: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userModel);
export default User;
