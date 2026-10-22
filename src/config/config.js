import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("cannot find env.")
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
}

export default config;