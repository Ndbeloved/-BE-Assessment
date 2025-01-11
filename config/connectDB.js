import  mongoose from "mongoose"



async function startServer(app, db_url, port){
    mongoose.connect(db_url)
        .then(()=>{
            console.log("connected to db successfully")
            app.listen(port, ()=>{
                console.log(`server running on port ${port}`)
            })
        })
        .catch(err=>{
            console.log(err)
            process.exit(0)
        })
}

export { startServer }