const jobService = require("../services/jobService");

const createJob = async (req, res, next) => {
    try {
        const job = await jobService.createJob(req.body);

        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: job
        });
    } catch (error) {
        next(error);
    }
};

const getAllJobs = async (req, res, next) => {
    try {
        const jobs = await jobService.getAllJobs(req.query);

        res.status(200).json({
            success: true,
            message: "Jobs retrieved successfully",
            data: jobs
        });
    } catch (error) {
        next(error);
    }
};

const getJobById = async (req, res, next) => {
    try {
        const job = await jobService.getJobById(req.params.id);

        res.status(200).json({
            success: true,
            message: "Job retrieved successfully",
            data: job
        });
    } catch (error) {
        next(error);
    }
};

const updateJob = async (req, res, next) => {
    try {
        const job = await jobService.updateJob(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            data: job
        });
    } catch (error) {
        next(error);
    }
};

const deleteJob = async (req, res, next) => {
    try {
        await jobService.deleteJob(req.params.id);

        res.status(200).json({
            success: true,
            message: "Job deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
};