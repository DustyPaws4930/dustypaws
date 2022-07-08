import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  title: {
    type: String,

    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  Image: {
    type: String,
    reuired: true,
  },


  reportDate: {
    type: Date,
    default: new Date(),
  },

  isLocked: {
    type: Boolean,
  },

  location: {
    type: Object,
  },

  priority: {
    type: Number,
    min: 0,
    max: 2,
  },

  userId: {
    type: String,
  },

  ngoId: {
    type: Object,
  },

  phoneNumber: {
    type: Number,
  },
});

let ReportModel = mongoose.model("Report", ReportSchema);
export default ReportModel;
