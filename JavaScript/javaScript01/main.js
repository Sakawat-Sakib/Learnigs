const userDiv = document.querySelector('.user')


const person = [
    {
        name : 'Sakib',
        age : '26',
    },
    {
        name : 'Siam',
        age : '26',
    },
    {
        name : 'Tuhin',
        age : '28',
    } 
]

//MAP***************
let getOnlyName = person.map((value,index)=>{
    return value.name
})
//console.log(getOnlyName) //  [ "Sakib", "Siam", "Tuhin" ]
//LEARNING : MAP GIVE OUTPUT AS ARRAY **********



//FIND******************
let firstPersonWithAge26 = person.find((value,index)=>{
    return value.age === '26' //need to write a condition here
})
//console.log(firstPersonWithAge26)
//LEARNING : 
//IF CONDITION MATCHED : return that entire value (first matched)
//IF CONDITION NOT MATCHED : return UNDIFINED
//IF NO CONDITION GIVEN : return first value
//RETURN only one output as OBJECT ************




//FILTER******************
let allPersonWithAge26 = person.filter((value,index)=>{
    return value.age === '26' // need to write condition here
})
//console.log(allPersonWithAge26)
//LEARNING :
//exactly same with FIND just different is it return all matched as ARRAY ****


//SOME***********
let anyPerson = person.some((value,index)=>{
    return value.age === '26'
})
//console.log(anyPerson)
//LEARNING
// return true if any value satisfy consition else return false*****


//EVERY***********
let everyPerson = person.every((value,index)=>{
    return value.age > 26
})
//console.log(everyPerson)
//LEARNING
// return true if every value satisfy consition else return false******

//INCLUDES*********
let newFruitsArr = ['mango','banana','apple']
//console.log(newFruitsArr.includes('apple'))
//LEARNING
// return true if any array contain given value****

//INDEXOF********
//console.log(newFruitsArr.indexOf('apple'))
//LEARNING
// return index if match or -1 if not match
// Uses strict equality (===) for comparison
// for both arrays and strings*****

//FINDINDEX*****
let getNameWithSakib = person.findIndex((value)=>{
    return value.name === 'Sakib'
})
//console.log(getNameWithSakib)
//LEARNING
// return index if match or -1 if not match
// used for complex array
// Allows custom comparison through a callback
// for arrays ****


//PRACTICAL
const renderUser = (users) =>{
    userDiv.innerHTML  = users.map((value)=>{
        return `<p>${value.firstName}</p>`
    }).join(" ")
}

const fetchUsers = async () => {
    try {
        let res = await fetch('https://dummyjson.com/users',{
            method: 'GET',
        })
        let users = await res.json()
        let allUsers = users.users
        
        renderUser(allUsers)

    } catch (error) {
        console.log(error)
    }
}

fetchUsers()