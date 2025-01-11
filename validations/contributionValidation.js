import Joi from "joi"

const contributionSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    amount: Joi.number().positive().required()
})

export { contributionSchema }