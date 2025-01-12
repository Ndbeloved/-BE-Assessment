import express from "express"
import { healthCheckController } from "../controllers/healthCheckController.js"
const router = express.Router()


router.get('/', healthCheckController)



export { router as healthCheckRoute}