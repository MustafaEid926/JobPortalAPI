const companyService = require("../services/companyService");

const createCompany = async (req, res, next) => {
    try {

        const company = await companyService.createCompany(req.body);

        res.status(201).json({
            success: true,
            message: "Company created successfully",
            data: company
        });

    } catch (error) {
        next(error);
    }
};

const getAllCompanies = async (req, res, next) => {

    try {

        const companies = await companyService.getAllCompanies();

        res.json({
            success: true,
            message: "Companies retrieved successfully",
            data: companies
        });

    } catch (error) {

        next(error);

    }

};

const getCompanyById = async (req, res, next) => {

    try {

        const company = await companyService.getCompanyById(req.params.id);

        res.json({
            success: true,
            message: "Company retrieved successfully",
            data: company
        });

    } catch (error) {

        next(error);

    }

};

const updateCompany = async (req, res, next) => {

    try {

        const company = await companyService.updateCompany(
            req.params.id,
            req.body
        );

        res.json({
            success: true,
            message: "Company updated successfully",
            data: company
        });

    } catch (error) {

        next(error);

    }

};

const deleteCompany = async (req, res, next) => {

    try {

        await companyService.deleteCompany(req.params.id);

        res.json({
            success: true,
            message: "Company deleted successfully"
        });

    } catch (error) {

        next(error);

    }

};



module.exports = {

    createCompany,

    getAllCompanies,

    getCompanyById,

    updateCompany,

    deleteCompany

};