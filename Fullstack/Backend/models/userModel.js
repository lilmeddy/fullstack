import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName :{type:String, required:true,trim:true},
    lastName :{type:String, required:true,trim:true},
    email :{type:String, required:true, trim:true, unique:true},
    password:{type:String, required:true,trim:true},
})

const userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)

export{userModel}