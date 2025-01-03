import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//mongoose returns an object and that can ,connection hone k bad response ko handle akr skte hain
      console.log(`MongoDB is connected !! DB Host : ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB connection error :",error);
        process.exit(1)//read what is exit
    }
}
export default connectDB;