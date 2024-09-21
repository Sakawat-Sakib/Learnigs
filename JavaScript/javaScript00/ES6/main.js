
function Person(name,age,city)
{
	this.name=name;
	this.age=age;
	this.city=city;
}

Person.prototype.sayName=function()
{
	console.log(`my name is ${this.name}`);
}


let person02=new Person("Silvi",21,"ctg");

console.log(person02);
person02.sayName();


//combination of two constructor
function Sakib(hobby,ocupation,name,age,city)
{
	Person.call(this,name,age,city);
	this.hobby=hobby;
	this.ocupation=ocupation;
}

Sakib.prototype=Object.create(Person.prototype);

let person01=new Sakib("Drawing","student","Sakawat",22,"ctg");

console.log(person01);
person01.sayName();


//ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6
//ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6ES6

class ShoppingList
{
	constructor(items,no)
	{
		this.items=items;
		this.no=no;

	}
	sayList()
	{
		console.log(this.items);
	}
}

const myList=new ShoppingList(["milk","redbull","cocke"],3);

console.log(myList.items);
myList.sayList();

class Product extends ShoppingList
{
	constructor(items,no,amount,cost)
	{
		super(items,no);
		this.amount=amount;
		this.cost=cost;
	}
}

const product= new Product(["milk","cocke","panta"],3,2500,2000);

console.log(product.amount);

product.sayList();