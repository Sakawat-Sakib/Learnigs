//Problem 1: How many time Sakib appear? what is the index of first appearance.

const para = "There is a cheerful schoolboy who loves to explore the world of books and learning. Every morning, Sakib wakes up early, excited to head to school and meet his friends. His favorite subject is mathematics, and he often spends hours solving problems and challenging himself with puzzles. During recess, Sakib enjoys playing football with his classmates, showing off his skills on the field. At home, Sakib helps his younger sister with her homework, proving he’s not just a bright student but also a caring brother. Sakib dreams of becoming a scientist one day, and his teachers often praise him for his curiosity and dedication to studies. Everyone who knows Sakib admires his energy and determination to succeed."
const findName = (text) => {
    const paraArr = text.split(" ")
    let count = 0
    paraArr.forEach((word)=>{
        if(word==="Sakib"){
            count++
        }
    })
    console.log(count)
    console.log(paraArr.indexOf("Sakib"))
}
//findName(para)
//method 2:
const matches = para.match(/sakib/gi)
const times = matches ? matches.length : 0
//console.log(times)

const position = para.search(/sakib/i)
//console.log(position)

//Problem 2: linear Search (array, item) find the position of item in the array
const arr = [1,2,4,5,6,7,5]
const findLoc = (array, item)=> {
    const loc = array.indexOf(item) >= 0 ?  array.indexOf(item) : 'not found'
    console.log(loc)
}
//findLoc(arr,8)


//Problem 3: find largest string from the array and return index
const text = ["a", "abc", "hey there", "How are you","ook"]

const findLen = (text) => {
    let maxLength = 0
    let maxLengthWord
    text.forEach((item)=>{
        if(item.length > maxLength){
            maxLength = item.length
            maxLengthWord = item
        }
    })
    console.log(`"${maxLengthWord}" is the longest string with ${maxLength} character`)
}

//findLen(text)

//Problem 4: remove falsy value from an array
const mixedArray = ["aws",undefined,"sakib",null,false,"apple",true,"",NaN]
const truthyArray = mixedArray.filter((item)=>{
    if(item){
        return true
    }else{
        return false
    }
})
//console.log(truthyArray)

//Problem 5: remove falsy value from object
const mixedObj = {a:"apple",b:"",c:NaN,d:"infinite",e:false,f:true,g:undefined,h:null}

const truthyObj = {} 
Object.entries(mixedObj).forEach(([key,val])=>{
    if(val){
         truthyObj[key] = val
    }
})
console.log(truthyObj)