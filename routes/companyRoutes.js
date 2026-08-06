const express = require("express");

const router = express.Router();

const companyController = require("../controllers/companyController");

const validate = require("../middleware/validate");

const {
    createCompanySchema
} = require("../validators/companyValidator");

// Create
router.post(
    "/",
    validate(createCompanySchema),
    companyController.createCompany
);

// Read All
router.get(
    "/",
    companyController.getAllCompanies
);

// Read One
router.get(
    "/:id",
    companyController.getCompanyById
);

// Update
router.put(
    "/:id",
    validate(createCompanySchema),
    companyController.updateCompany
);

// Delete
router.delete(
    "/:id",
    companyController.deleteCompany
);

module.exports = router;