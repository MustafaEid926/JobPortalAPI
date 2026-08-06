const Company = require("../models/Company");

// Create
const createCompany = async (companyData) => {
    return await Company.create(companyData);
};

// Get All
const getAllCompanies = async () => {
    return await Company.find();
};

// Get By ID
const getCompanyById = async (id) => {

    const company = await Company.findById(id);
    const AppError = require("../middleware/AppError");
    if (!company) {
        throw new AppError("Company not found", 404);
    }

    return company;
};

// Update
const updateCompany = async (id, companyData) => {

    const company = await Company.findByIdAndUpdate(
        id,
        companyData,
        {
            new: true,
            runValidators: true
        }
    );
    
    const AppError = require("../middleware/AppError");
    if (!company) {
        throw new AppError("Company not found", 404);
    }

    return company;
};

// Delete
const deleteCompany = async (id) => {

    const company = await Company.findByIdAndDelete(id);

    const AppError = require("../middleware/AppError");
    if (!company) {
        throw new AppError("Company not found", 404);
    }

    return company;
};

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
};