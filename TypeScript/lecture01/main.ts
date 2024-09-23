export {}

let message = 'hello world war'

console.log(message)

let abc: string; //decalared

let isNew: boolean = true
let total: number = 0
let name: string = 'sakib'
let n: null = null
let u: undefined = undefined

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]


//tuple (can contain element as decalared, not more or less)
let person1: [string, number] = ['chris', 22]


//enum
enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green

console.log(c) // by default index started at 0 but we can set starting index i.e Red = 5 


//any
let randomValue: any = 10


//multitype (union type)
let mymultitypevariable: number | boolean;
mymultitypevariable = 20
mymultitypevariable = true


//function---

function add(num1: number, num2?: number){
    return num1+num2
}

console.log(add(5))

function hello(){
    console.log('hello')
}

hello()





//passing object as parameter

function fullName(person : {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'MD',
    lastName: 'Sakib'
}

fullName(p)






//interface
interface Car {
    model : number
    color : string
    price? : number
}

function carDeails(car: Car){
    console.log(`${car.model} model in ${car.color} color is available in ${car.price} BDT`)
}

let vehicle = {
    model : 2023,
    color: 'green',
   
}

carDeails(vehicle)






//class

class Employee {
    employeeName : string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`hey ${this.employeeName} good morning`)
    }
}

let employee1 = new Employee('sakib')

employee1.greet()




//inheritance

class Manager extends Employee{

    constructor(managerName: string){
        super(managerName) //to call parent class constructor
    }

    work(){
        console.log(`manager is working`)
    }
}

let mng1 = new Manager('saad')
console.log(mng1.employeeName)
mng1.work()
mng1.greet()



//access modifier (public, private, protected)