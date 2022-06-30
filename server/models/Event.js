import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  address: {
    type: Object,
    require: true,
  },

  Image: {
    type: String,
    reuired: true,
  },

  price: {
    type: Number,
  },

  createdBy: {
    type: String,
  },

  date: {
    type: Date,
    default: Date,
  },
});

let EventModel = mongoose.model("Event", EventSchema);
export default EventModel;
