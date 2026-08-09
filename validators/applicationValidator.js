const Joi = require("joi");

const createApplicationSchema= Joi.object({
    job: Joi.string().required(),
    user: Joi.string().required(),
    coverLetter: Joi.string().trim().min(10).max(500).optional(),
    resume: Joi.string().trim().required()
})

const updateApplicationSchema= Joi.object({
    coverLetter: Joi.string().trim().min(10).max(500).optional(),
    resume: Joi.string().trim().optional(),
    status: Joi.string().valid("Pending", "Accepted", "Rejected").optional()
})

module.exports = {createApplicationSchema, updateApplicationSchema}