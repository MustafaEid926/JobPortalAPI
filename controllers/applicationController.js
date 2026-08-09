const {createApplicationSchema, updateApplicationSchema}= require('../validators/applicationValidator')
const Application= require('../models/Application')
const mongoose = require('mongoose')
const applicationService = require('../services/applicationService')

class applicationController {

    async createApplication(req, res){
        const {value, error}= createApplicationSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }
        try{
            const application= await applicationService.createApplication(value)
            return res.status(201).json({
                success: true,
                message: "Application created successfully",
                data: application
            })
        }catch(error){
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async getApplications(req, res){
        try{
            const applications= await applicationService.getApplications()
            return res.json({
                success: true,
                message: "Applications retrieved successfully",
                data: applications
            })
        }catch(error){
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    }

    async getApplicationById(req, res){
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                success: false,
                message: "Invalid application ID"
            })
        }
        try{
            const application= await applicationService.getApplicationById(id)
            return res.json({
                success: true,
                message: "Application retrieved successfully",
                data: application
            })
        }catch(error){
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async updateApplication(req, res){
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                success: false,
                message: "Invalid application ID"
            })
        }
        const {value, error}= await updateApplicationSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }
        try{
            const application= await applicationService.updateApplication(id, value)
            if(!application){
                return res.status(404).json({
                    success: false,
                    message: "Application not found"
                })
            }
            return res.json({
                success: true,
                message: "Application updated successfully",
                data: application
            })
        }catch(error){
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    async deleteApplication(req, res){
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                success: false,
                message: "Invalid application ID"
            })
        }
        try{
            const application= await applicationService.deleteApplication(id)
            if(!application){
                return res.status(404).json({
                    success: false,
                    message: "Application not found"
                })
            }
            return res.json({
                success: true,
                message: "Application deleted successfully"
            })
        }catch(error){
            console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports= new applicationController()