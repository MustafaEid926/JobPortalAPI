const mongoose = require("mongoose");

const applicationSchema= new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        job:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true
        },
        coverLetter:{
            type: String,
            minlength: 10,
            maxlength: 500,
            trim: true
        },
        resume:{
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["Pending", "Accepted", "Rejected"],
            default: "Pending"
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Application", applicationSchema);