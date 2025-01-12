import express from "express"
import morgan from "morgan"
import { causesRouter } from "./routes/causesRoute.js"
import { globalErrorHandler } from "./utils/errorHandler.js"
import { startServer } from "./config/connectDB.js"
import dotenv from "dotenv"
import { notFoundController } from "./controllers/notFoundController.js"
import { healthCheckRoute } from "./routes/healthRoute.js"
import { scheduleHealthCheck } from "./crone/healthCheckCrone.js"
dotenv.config()



const app = express()
const DB_URL = process.env.NODE_ENV === "prod" ? process.env.MONGO_URL_PROD : process.env.MONGO_URL_DEV
const PORT = process.env.PORT
const URL = process.env.URL || null
app.use(express.json())
app.use(morgan("dev"))


//routes
app.use('/api/health', healthCheckRoute)
app.use('/api/causes', causesRouter)

scheduleHealthCheck(URL)

app.use("*", notFoundController)

app.use(globalErrorHandler)

startServer(app, DB_URL, PORT)