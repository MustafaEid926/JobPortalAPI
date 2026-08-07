const Joi = require("joi");

const createCompanySchema = Joi.object({
  name: Joi.string().min(2).max(100).trim().required(),

  email: Joi.string().email().required(),

  website: Joi.string().uri(),

  location: Joi.string().required(),

  description: Joi.string(),
});

const updateCompanySchema = Joi.object({
  name: Joi.string().min(2).max(100).trim(),

  email: Joi.string().email(),

  website: Joi.string().uri(),

  location: Joi.string(),

  description: Joi.string(),
}).min(1);
module.exports = {
  createCompanySchema,
  updateCompanySchema,
};
