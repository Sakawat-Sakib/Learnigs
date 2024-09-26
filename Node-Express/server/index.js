const http = require("http");
const fs = require('fs');
const url = require("url");


function myHandler(req,res){
    const log = `${Date.now()}:${req.url} New Req Received\n`;

    fs.appendFile("log.txt",log,(err,data)=>{
        const myUrl = url.parse(req.url);
        console.log(myUrl)
        switch (myUrl.pathname) {

            case"/":
                res.end('new response from home');
            break;

            case"/about":
                res.end('new response from about');
            break;

            default:
                res.end("new 404 not found");
                
        }
        
    }); 
}
//Runs in every reload
const myServer = http.createServer(myHandler);

myServer.listen(8000,()=>console.log("OK"));



