const express = require('express');
const mongoose = require('mongoose');

const app = express();
const uri = 'mongodb+srv://mdsakawatsakib:f6GXjipHlF7m0lt5@cluster0.4lx9viz.mongodb.net/atlasTestNew';
mongoose.connect(uri)
.then(console.log('DB is connected'));


//body Parsing
app.use(express.urlencoded({extended: false}));

//Model
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    }
});

const User = mongoose.model('user',userSchema);



//Route
app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

app.post('/add', async (req,res)=>{
    const {firstName,lastName} = req.body;
    const user = await User.create({
        firstName,
        lastName,
    });
    res.send(user);
})

app.listen(8001,()=>console.log('server started'));

