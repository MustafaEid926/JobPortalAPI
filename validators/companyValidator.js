const Joi = require("joi");

const createCompanySchema = Joi.object({
    name: Joi.string().trim().required(),

    email: Joi.string().email().required(),

    website: Joi.string().uri(),

    location: Joi.string().required(),

    description: Joi.string()
});

module.exports = {
    createCompanySchema
};