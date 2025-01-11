import { Types } from "mongoose"


function validateID(req, res, next){
    try{
        const { id } = req.params
        const idIsValid = id && Types.ObjectId.isValid(id)
        if(!idIsValid) throw new CustomError("Provide a valid cause id", 400)
        next()
    }catch(err){
        next(err)
    }
}

export { validateID }