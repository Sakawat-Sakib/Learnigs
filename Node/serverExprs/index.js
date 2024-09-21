const express = require('express');
// const http = require('http');

const app = express();

app.get("/",(req,res)=>{
    return res.send(`Hello ${req.query.name} from home`);
});

app.get("/about",(req,res)=>{
    return res.send("Hello from about");
});

//declaring PORT
app.listen(8001,()=>console.log("OK"));


//This code will trigger in every page action
// const myServer = http.createServer(app);

//This for declaring port
// myServer.listen(8001,()=>console.log("OK"));