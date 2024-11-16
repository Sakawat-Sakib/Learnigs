

# To fetch key and value from an Object : 
	
	Object.entries(car).map(([key,value])=>())

# Two ways of retrieving data from Object : 
	
	const test = {
  			name: 'sakib',
  			age: 27
		}

		console.log(test.age)
		console.log(test['age'])

# data can be added like this in a object :
	const ob = {

		}
	ob.isExist = "yes"
	or : ob["isExist"] = "yes"

	console.log(ob) // {isExist: "yes"}

# we can declare property of an object dynamically so that we can change the property name as we want : 

cd = "me" //we can assign anything here
const a = {
  b : 3,
  [cd]: 4, // need to add [ ] to bhave like dynamic
  e: 5
}

console.log(a) // {b: 3, me: 4, e: 5}


