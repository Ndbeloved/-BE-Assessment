

class CustomError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.captureStackTrace)
    }
}


function globalErrorHandler(err, req, res, next){
    let error = {...err, message: err.message}
    const statusCode = error.statusCode || 500
    const message = error.message || "Something went wrong"
    res.status(statusCode).json({success: false, message})
}

export { globalErrorHandler, CustomError}