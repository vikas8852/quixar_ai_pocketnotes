import mongoose from "mongoose";
import { DB_NAME  } from "../constant.js";

const connectDB = async () => {
    try {
      //  const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
      const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/learning01')
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection Error ", error);
        process.exit(1)
    }

} 


export default connectDB;