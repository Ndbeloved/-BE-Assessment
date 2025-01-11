import { CustomError } from "../utils/errorHandler.js"
import { contributionSchema } from "../validations/contributionValidation.js"


function validateContributionReq(req, res, next){
    try{
        const contributionData = req.body
        const { error } = contributionSchema.validate(contributionData)
        if(error) throw new CustomError(error.details[0].message, 400)
        next()
    }catch(err){
        next(err)
    }
}

export { validateContributionReq }