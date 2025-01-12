import mongoose from "mongoose"

async function healthCheckController(req, res, next){
    try{
        const dbStatus = mongoose.connection.readyState === 1 ? 'UP' : 'DOWN';
        res.status(200).json({
            status: 'UP',
            dbStatus,
            timestamp: new Date().toISOString()
        });
    }catch(err){
        next(err)
    }
}

export { healthCheckController }