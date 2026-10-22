import mongoose, { connect } from "mongoose";
import config from "./config.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"])
async function connectDb() {
    try{
        await mongoose.connect(config.MONGO_URI);

    console.log("Connected to DB");
    }catch(error){
        console.error("DB Connection failed: ", error.message);
        process.exit(1);
    }
};

export default connectDb;