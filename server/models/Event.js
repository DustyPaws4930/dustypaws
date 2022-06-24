import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String
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
    type: Number
  },

  createdBy: {
    type: Object,
  },

  Date: {
    type: Number,
    default: Date
  },
});

let EventModel = mongoose.model("Event", EventSchema);
export default EventModel;
