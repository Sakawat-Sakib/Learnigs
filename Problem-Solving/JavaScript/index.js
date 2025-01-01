//Problem 1 : print any number between 1 to 6
const diceFun = (start,end) => {
    const dice = Math.round(Math.random() * 10)
    if(dice>= start && dice<=end){
        console.log(dice)
    }else{
        diceFun(start,end)
    }
}

//diceFun(2,7)

const getRndInt = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)) + min 
}

const diceTwo = getRndInt(5,10)
//console.log(diceTwo)

//Problem 2 : arrange student name in Alphabetic order
const studentsArr = ["sakib","rakib","abir","karim","mehedi","siam"]
//console.log(studentsArr.sort())

const roll = [3,5,2,7,4]
//console.log(roll.sort())


//Problem 3 : leap year
const isLeapYear = (year) => {
    if((year % 400 === 0)||((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year`)
    }else{
        console.log(`${year} is not a leap year`)
    }
}

//isLeapYear(2025)

//Problem 4 : number of vowel
const vowels = ["a","e","i","o","u", "A", "E", "I", "O", "U"]
const sen = "i love my country"

const vowelCount = (sentence) => {
    let count = 0;
    const sentenceArr = Array.from(sentence)

    sentenceArr.forEach((char)=>{
        vowels.forEach((vow)=>{
            if(vow == char){
                count = count + 1
            }
        })
    })

    console.log(count)
}

//vowelCount(sen)

//Problem 5 : find duplicate number from array
const numbers = [1,2,2,3,6,7,7,8,8,8,8,4,6,4,6,2,2]
//method 1:
const findDup = (arr) => {
    const  dupArr = []
    arr.forEach((item)=>{
        let count = 0
        arr.forEach((comp)=>{
            if(item === comp){
                count++
            }
        })
        if(count>1 && !dupArr.includes(item)){
            dupArr.push(item)
        }
    })

    console.log(dupArr)
    
}

//findDup(numbers)

//method 2:
const newArr = numbers.filter((val,index,arr)=>{
   return  arr.indexOf(val) !== index
      
})
//console.log(newArr)






