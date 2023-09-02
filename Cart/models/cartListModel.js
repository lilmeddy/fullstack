const mongoose = require("mongoose") 
const cartListSchema = new mongoose.Schema({
    name: {type:String, required:true,trim:true },
    quantity:{type:Number, required:true, trim:true, default:1,},
    price :{type:Number, required:true, trim:true},
    email :{type:String, required:true, trim:true, unique:true},
})

let cartListModel = mongoose.models.Arr_tbs || mongoose.model("Arr_tbs", cartListSchema)

module.exports = cartListModel