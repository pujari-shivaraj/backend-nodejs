import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})


connectDB()





/*
(async () =>{

    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        application.on("error",(error) =>{
            console.log("ERRR:",error);
            throw error
        })

        app.listen(process.env.PORT,() =>{
            console.group(`app is listening ${process.env.PORT} `)       
        })
        
    } catch (error) {

        console.error("ERROR:",error)

        
    }




})()
*/
