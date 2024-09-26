const mongoose = require('mongoose');

//DB Connection
async function connectMongoDB(url){
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDB,
}