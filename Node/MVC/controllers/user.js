const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handleGetUserById (req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateById (req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName:"new"});
    return res.json({status:"Changed"});
}

async function handleDeleteById (req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Deleted"});
}

async function handleAddUser (req,res){
    const body = req.body;
    
    const  result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log("result",result);
    return res.json({msg : "success", id: result._id});
}


//exports
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateById,
    handleDeleteById,
    handleAddUser,
};