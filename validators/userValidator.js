const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).trim().required(),

  email: Joi.string().email().trim().required(),

  phone: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required(),

  skills: Joi.array().items(Joi.string()).min(1).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(50),

  email: Joi.string().email().trim(),

  phone: Joi.string().pattern(/^[0-9]{11}$/),

  skills: Joi.array().items(Joi.string()).min(1),
}).min(1);

module.exports = {
  createUserSchema,
  updateUserSchema,
};
