
function anyTask(filename){
    return (req,res,next)=>{
        //You can do something here before interacting with DB

        next();
    };
};

module.exports = {
    anyTask,
}