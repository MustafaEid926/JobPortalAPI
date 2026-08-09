const { Router } = require("express");
const applicationController = require("../controllers/applicationController");

const applicationRouter= Router()

applicationRouter.post('/', applicationController.createApplication)
applicationRouter.get('/', applicationController.getApplications)
applicationRouter.get('/:id', applicationController.getApplicationById)
applicationRouter.put('/:id', applicationController.updateApplication)
applicationRouter.delete('/:id', applicationController.deleteApplication)

module.exports = applicationRouter