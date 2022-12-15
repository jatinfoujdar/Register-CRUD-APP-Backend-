const User = require("../models/userModel")

exports. home = (req,res)=>{
    res.send("hello from jatin foujdar")
};

exports.createUser = async(req,res)=>{
    try {
        const {name , email } = req.body;
        if(!name || !email){
            throw new Error("name and email are require");
        }
        const userExits = await User.findOne({email})
        if(userExits){
            throw new error("email already exits")
        }

        const user = await User.create({name,email})
        res.status(201).json({
            success: true,
            message:"regested successfully",
            user,
        })
 
            } catch (error) {
        console.log(error);
    }
}

exports.getUser = async(req,res)=>{
    try {
        const users = awaitUser.findOne();
        res.status(200).json({
            success:true,
            users,
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}

exports.editUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body);
        res.status(200).json({
            success:true,
            message:"User update successfull"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id , req.body);
        res.status(200).json({
            success:true,
            message:"User delete successfull"
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
}