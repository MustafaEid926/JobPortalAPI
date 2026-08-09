const Application= require("../models/Application")

class applicationService{

    async createApplication(application){
        return await Application.create(application)
    }

    async getApplications(){
        return await Application.find().populate('user', "name email").populate('job', "title description")
    }

    async getApplicationById(id){
        return await Application.findById(id).populate('user', "name email").populate('job', "title description")
    }

    async updateApplication(id, updatedApplication){
        return await Application.findByIdAndUpdate(id, updatedApplication, {new: true}).populate('user', "name email").populate('job', "title description")
    }

    async deleteApplication(id){
        return await Application.findByIdAndDelete(id)
    }
}

module.exports= new applicationService()