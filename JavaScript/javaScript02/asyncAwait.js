const promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('success')
    },3000)
})

async function life() {
    try{
        const result = await promise1
        console.log(result)
    }catch(e) {
        console.log(e)
    }
}

life()