function outer (){
    let count = 0

    return function increment(){
        count++
        console.log(count)
    }
}

const incFunc = outer()
incFunc()
incFunc()
incFunc()