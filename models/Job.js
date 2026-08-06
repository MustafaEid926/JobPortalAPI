const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        salary: {
            type: Number,
            required: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        employmentType: {
            type: String,
            enum: ["Full-Time", "Part-Time", "Internship", "Remote"],
            required: true
        },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Job", jobSchema);