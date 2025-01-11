import { model, Schema, Types } from "mongoose";




const contributionSchema = new Schema({
    causeID: {
        type: Types.ObjectId,
        required: [true, "Provide cause id"]
    },
    name: {
        type: String,
        required: [true, "Provide name field"]
    },
    email: {
        type: String,
        required: [true, "Provide email field"]
    },
    amount: {
        type: Number,
        required: [true, "Provide amount"]
    }
})


const ContributionModel = model("Contributions", contributionSchema)

export { ContributionModel }