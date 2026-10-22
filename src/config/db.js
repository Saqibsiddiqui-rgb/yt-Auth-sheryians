import mongoose, { connect } from "mongoose";
import config from "./config.js";

async function connectDb() {
    await mongoose.connect(config.MONGO_URI);

    console.log("Connected to DB");
};

export default connectDb;