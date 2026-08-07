const Joi = require("joi");

const createJobSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),

  description: Joi.string().required(),

  salary: Joi.number().required(),

  location: Joi.string().required(),

  employmentType: Joi.string()
    .valid("Full-Time", "Part-Time", "Internship", "Remote")
    .required(),

  company: Joi.string().hex().length(24).required(),
});
const updateJobSchema = Joi.object({
  title: Joi.string().min(3).max(100),

  description: Joi.string(),

  salary: Joi.number(),

  location: Joi.string(),

  employmentType: Joi.string().valid(
    "Full-Time",
    "Part-Time",
    "Internship",
    "Remote",
  ),

  company: Joi.string().hex().length(24),
}).min(1);

module.exports = {
  createJobSchema,
  updateJobSchema,
};
