const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ReportComplaintSchema = new Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength:20,
        required: true
    },
    description: {
            type: String,
            required: true
    },
    name: {
        type: String,
        required: true
    },

    img:{
        type:File
    },

    reportDate: {
        type:Date
    },

    isLocked:{
        type: Boolean,
        required: true
    },
    location:{
        type:Object
    },
    
    priority: {
        type: Number,
        min: 0,
        max: 5
    },
    userId:{
        type:Object
    },
    ngoId:{
        type:Object
    },
    contact: {
        type: String
    }
})

exports.ReportComplaint = mongoose.model('ReportComplaint', ReportComplaintSchema)