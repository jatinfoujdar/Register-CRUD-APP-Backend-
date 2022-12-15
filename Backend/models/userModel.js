const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "name is required"],
        trim:true,
        maxlength:[25,"name must be 20 char long"],
    },
    email:{
        type:String,
        require:[true,"email is required"],
        unique:true,
    }
})


module.exports = mongoose.model("User",userSchema) 