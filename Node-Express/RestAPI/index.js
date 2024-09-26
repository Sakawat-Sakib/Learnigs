const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');


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
app.get('/api/users',(req,res)=>{
    return res.json(users);
});

app.route('/api/users/:id') //write this way for different req with same route
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})
.patch((req,res)=>{
    //pending task
    return res.json({status:"pending"});
})
.delete((req,res)=>{
    //pending task
    return res.json({status:"pending"});
})




app.post('/api/users',(req,res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status:"Success"});
    });
    
});

// app.patch('/api/users/:id',(req,res)=>{
//     //pending task
//     return res.json({status:"pending"});
// });

// app.delete('/api/users/:id',(req,res)=>{
//     //pending task
//     return res.json({status:"pending"});
// });

app.listen(PORT,()=>{console.log(`Server started at POR:${PORT}`)});
