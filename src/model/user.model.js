import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [false, "Username should be unique!"],
    },
    password:{
        type: String,
        required: [true, "Password is Required"],
        unique: false,
    },
    email:{
        type: String,
        required: [true, "Email is requierd"],
        unique: false,
    }
})