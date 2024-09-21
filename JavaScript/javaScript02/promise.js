// const promise = new Promise((resolve,reject)=>{

//     //some task will be done here then we will get output (success/faiure) ....

//     const output = 'success task' // assume success output

//     if(output){
//         resolve(output) // we can pass output or anything here which will work as arg for success cb
//     }
//     else{
//         reject('some thing went wrong') // we can also pass anything here which will work as arg for fail cb
//     }
// })

// promise
// .then((res)=> res+' 1') // this is the cb function for success
// .then((res)=> res+' 2')
// .then((res)=> console.log(res+' 3')) 
// .catch((err)=> console.log(err)) // this is the cb function for error

// console.log('this is last message')




// //promise.all (mainly use for in situation when we need to use multiple api result at the same time)

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('hey there')
//     },5000)
// })


// Promise.all([promise1, promise2, promise3]).then((values)=>{
//     console.log(values)
// })