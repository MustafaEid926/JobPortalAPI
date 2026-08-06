const Joi = require("joi");

const createJobSchema = Joi.object({

    title: Joi.string().required(),

    description: Joi.string().required(),

    salary: Joi.number().required(),

    location: Joi.string().required(),

    employmentType: Joi.string()
        .valid(
            "Full-Time",
            "Part-Time",
            "Internship",
            "Remote"
        )
        .required(),

    company: Joi.string().hex().length(24).required()

});

module.exports = {
    createJobSchema
};