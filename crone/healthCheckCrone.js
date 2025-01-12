import cron from 'node-cron'
import fetch from 'node-fetch'


function scheduleHealthCheck(url){
    if(url){
        cron.schedule('*/14 * * * *', async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(`[${new Date().toISOString()}] Health Check Successful:`, data);
            } catch (error) {
                console.error(`[${new Date().toISOString()}] Health Check Failed:`, error.message);
            }
        });
        console.log('Health check cron job scheduled to run every 14 minutes.');
    }
    else{
        console.log('Health check not up yet.');
    }
    
};

export { scheduleHealthCheck }
