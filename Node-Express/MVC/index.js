const express = require('express');
const userRouter = require('./routes/user');
const {connectMongoDB} = require('./connection');
const {anyTask} = require('./middlewares/index');

const app = express();
const PORT = 8000;

//Connection DB (This code also create DB if not exist otherwise just established connection)
connectMongoDB('mongodb://127.0.0.1:27017/FirstDB')
.then(()=>console.log("mongoDB connected"));


//MIDDLEWARE
app.use(express.urlencoded({extended: false})); //parsing data from URL
app.use(anyTask("log.txt"));


//ROUTE
app.use("/api/users",userRouter);



//Server Connection
app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});


