const Job = require("../models/Job");
const Company = require("../models/Company");
const AppError = require("../middleware/AppError");

const createJob = async (jobData) => {

    // التأكد من أن الشركة موجودة
    const company = await Company.findById(jobData.company);

    if (!company) {
        throw new AppError("Company not found", 404);
    }

    // إنشاء الوظيفة
    const job = await Job.create(jobData);

    return job;
};

const getJobById = async (id) => {

    const job = await Job.findById(id)
        .populate("company");

    if (!job) {
        throw new AppError("Job not found", 404);
    }

    return job;

};

const getAllJobs = async (query) => {

    const filter = {};

    if (query.location) {
        filter.location = query.location;
    }

    if (query.employmentType) {
        filter.employmentType = query.employmentType;
    }

    if (query.salary) {
        filter.salary = Number(query.salary);
    }

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    return await Job.find(filter)
        .populate("company", "name location")
        .skip(skip)
        .limit(limit);
};

const updateJob = async (id, jobData) => {

    // إذا قام المستخدم بتغيير الشركة
    if (jobData.company) {

        const company = await Company.findById(jobData.company);

        if (!company) {
            throw new AppError("Company not found", 404);
        }

    }

    const job = await Job.findByIdAndUpdate(
        id,
        jobData,
        {
            new: true,
            runValidators: true
        }
    ).populate("company", "name location");

    if (!job) {
        throw new AppError("Job not found", 404);
    }

    return job;
};

const deleteJob = async (id) => {

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
        throw new AppError("Job not found",404);
    }

    return job;
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
};