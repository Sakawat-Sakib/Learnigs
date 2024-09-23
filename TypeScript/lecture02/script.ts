function abc(): number {
    return 10
}


function xyz(): void {
    console.log('hello')
}


//enum (quite similar with object)

enum MousePosition {
    x = 0,
    y = 0,
}

console.log(MousePosition.x)


// type aliases (primitive)

type Name = string
let address: Name;

// type aliases (non-primitive)

type Human = {
    name: string,
    age: number,
    email: string
}

let sakib : Human = {
    name: 'SAKIB',
    age: 28,
    email: 'sakawatsakib@gmail.com'
}

console.log(sakib);


//interface

interface Food {
    name: string
    price: number
}

interface Homemade extends Food{
    tag: string
}

function getFood(food: Homemade){
    console.log(food.price);    
}

let sweet = {
    name: 'Sawndesh',
    price: 122,
    tag: 'gold'
}


getFood(sweet)


//literal

let num: 10;
num = 10 // I can't assign any value other than 10