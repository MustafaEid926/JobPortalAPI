const express = require("express");

const router = express.Router();

const jobController = require("../controllers/jobController");

const validate = require("../middleware/validate");

const { createJobSchema } = require("../validators/jobValidator");

// Create
router.post(
    "/",
    validate(createJobSchema),
    jobController.createJob
);

// Get All
router.get(
    "/",
    jobController.getAllJobs
);

// Get By ID
router.get(
    "/:id",
    jobController.getJobById
);

// Update
router.put(
    "/:id",
    validate(createJobSchema),
    jobController.updateJob
);

// Delete
router.delete(
    "/:id",
    jobController.deleteJob
);

module.exports = router;