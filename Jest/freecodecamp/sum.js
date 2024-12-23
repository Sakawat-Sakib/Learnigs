function sum(a,b) {
    return a+b
}

module.exports = sum


function fetchData (callback){
    setTimeout(()=>{
        callback('peanut butter')
    },3000)

}

module.exports = fetchData


function fetchPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('peanut butter')
        },3000)
    })
}

module.exports = fetchPromise