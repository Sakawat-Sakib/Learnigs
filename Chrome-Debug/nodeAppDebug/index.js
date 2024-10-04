const express =  require('express')
const app = express()
const PORT = 8000

const arr = [1,2,3,4]

const newArr = arr.map((item)=>{
    if(item>2){
        return item+100
    }
    return item
})

console.log(newArr)

app.get('/',(req,res)=>{
    console.log('Hello World')
    res.json({"Test" : newArr})
    res.end()
})

//Server Connection
app.listen(PORT,()=>{console.log(`Server started at PORT:${PORT}`)});

