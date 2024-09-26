const mongoose = require('mongoose');
const express = require('express');

//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/FirstDB')
.then(()=>console.log("mongoDB Connected"))
.catch((err)=> console.log(err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
});

//Model
const User = mongoose.model("user",userSchema);



const app = express();
const PORT = 8000;

//MIDDLEWARE
app.use(express.urlencoded({extended: false})); //parsing data from URL

app.use((req,res,next)=>{
    //You can do somethng here with Request before runing the GET, POST, DELETE functionality


    //next function
    next();
});


//ROUTE
app.post('/api/users', async(req,res)=>{
    const body = req.body;
    
    const  result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log("result",result);
    return res.json({msg : "success"});    
});


app.get('/api/users',async(req,res)=>{
    const allUsers = await User.find({});
    return res.json(allUsers);
});


app.route('/api/users/:id') //write this way for different req with same route
.get(async(req,res)=>{
    const user = await User.findById(req.params.id);
    return res.json(user);
})
.patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName:"new"});
    return res.json({status:"Changed"});
})
.delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Deleted"});
})


//Server Connection
app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});

