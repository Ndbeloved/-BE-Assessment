import { model, Schema } from "mongoose"



const causesSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    image_url: {
        type: String,
        required: [true, "Provide is Image url"]
    }
})



const CauseModel = model('Cause', causesSchema)
export { CauseModel }