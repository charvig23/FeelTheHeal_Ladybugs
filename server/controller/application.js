const Application = require('../Models/Application');

exports.submitApplication = async(req,res)=>{
    try{
        const application = await Application.create(req.body);
        res.status(201).json({
            success:true,
            message: "Application submitted successfully",
            data: application,
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: "Application could not be submitted",
            error: error.message,
        });
    }
}

// <--GET APPLICATIONS--> --Admin

exports.getApplication = async(req,res)=>{
    try{
        const application = await Application.find();
        res.status(200).json({
            success:true,
            message: "Application fetched successfully",
            data: application,
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: "Application could not be fetched",
            error: error.message,
        });
    }
}


// <--DELETE APPLICATION--> --Admin
exports.deleteApplication = async(req,res,next)=>{
    try{
        const application = await Application.findById(req.params.id);
        if(!application){
            return res.status(404).json({
                success:false,
                message: "Application not found",
            });
        }
        await application.remove();
        res.status(200).json({
            success:true,
            message: "Application deleted successfully",
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: "Application could not be deleted",
            error: error.message,
        });
    }
}

// <--UPDATE APPLICATION--> --Admin
// admin is allowed only to update the status of the application
exports.updateApplication = async(req,res,next)=>{
    try{
        const allowedFieldsToUpdate = { status: req.body.status };
        let application = await Application.findById(req.params.id);
        if(!application){
            return res.status(404).json({
                success:false,
                message: "Application not found",
            });
        }
        application = await Application.findByIdAndUpdate(
            req.params.id,
            allowedFieldsToUpdate, 
            {
                new: true,
                runValidators: true,
                useFindAndModify: false
            }
        );
        res.status(200).json({
            success:true,
            message: "Application updated successfully",
            data: application,
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message: "Application could not be updated",
            error: error.message,
        });
    }
}