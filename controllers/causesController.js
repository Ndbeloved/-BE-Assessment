import { Types } from "mongoose"
import { CauseModel } from "../models/causesModel.js"
import { CustomError } from "../utils/errorHandler.js"
import { ContributionModel } from "../models/contributionModel.js"


async function getAllCausesController(req, res, next){
    try{
        const allCauses = await CauseModel.find()
        res.status(200).json({success: true, data: allCauses})
    }catch(err){
        next(err)
    }
}



async function postNewCauseController(req, res, next){
    try{
        const { title, description, image_url } = req.body
        const newCause = await CauseModel.create({
            title,
            description,
            image_url
        })
        res.status(201).json({success: true, data: newCause})
    }catch(err){
        next(err)
    }
}



async function getCauseByIdController(req, res, next){
    try{
        const { id } = req.params
        const cause = await CauseModel.findById(id)
        if(!cause) throw new CustomError("Can't find cause event with specified id", 404)
        res.status(200).json({success: true, data: cause})
    }catch(err){
        next(err)
    }
}



async function updateCauseByIdController(req, res, next){
    try{
        const { id } = req.params
        const updates = req.body
        if(!updates || Object.keys(updates).length === 0) throw new CustomError("No field to update provided", 400)
        const causeUpdate = await CauseModel.findByIdAndUpdate(
            id,
            {$set: updates},
            { new: true, runValidators: true }
        )
        if(!causeUpdate) throw new CustomError("Cause event not found", 404)
        res.status(200).json({success: true, data: causeUpdate})
    }catch(err){
        console.log(err)
        next(err)
    }
}



async function deleteCauseByIdController(req, res, next){
    try{
        const { id } = req.params
        const cause = await CauseModel.findByIdAndDelete(id)
        if(!cause) throw new CustomError("Can't find cause event with specified id", 404)
        res.status(200).json({success: true, message: "Deleted successfully"})
    }catch(err){
        next(err)
    }
}



async function contributeToCauseController(req, res, next){
    try{
        const { id } = req.params
        const { name, email, amount } = req.body
        const newContribution = await ContributionModel.create({
            causeID: id,
            name,
            email,
            amount
        })
        res.status(201).json({success: true, data: newContribution})
    }catch(err){
        next(err)
    }
}







export {
    getAllCausesController,
    postNewCauseController,
    getCauseByIdController,
    updateCauseByIdController,
    deleteCauseByIdController,
    contributeToCauseController
}