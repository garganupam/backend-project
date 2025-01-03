import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.on("error",()=>{
        console.log("Reason is our express is not able to talk to db",error)
        throw(error)
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo DB connection failed",error)
})



// import express from "express";
// const app=express()


// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Reason is our express application is not able to talk to db:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR :",error)
//         throw error
//     }

// })()