

##MAP : 
* const result = array.map((item) => item * 2);

* Creates a new array by applying a function to each element.
* Requires return inside {} if curly braces are used.
* Skips elements without a return value (returns undefined for those elements).

##FOREACH :
* array.forEach((item, index) => console.log(item, index));

* forEach(currentValue, index, arr)
* Executes a function for each element in the array.
* Does not return a new array (always returns undefined).
* Used for side effects, like logging or updating variables.

##REDUCE :
* const sum = array.reduce((acc, item) => acc + item, 0);

* Reduces the array to a single value by applying a function repeatedly.
* Takes two arguments: accumulator and current value.
* Initial value for the accumulator can be specified.

##FIND : 
* const result = array.find((item) => item > 5);

* Returns the first element that satisfies the condition.
* Stops iterating once the condition is met.

##FILTER : 
* const filtered = array.filter((item) => item > 5);

* filter(currentValue, index, arr)
* Creates a new array with elements that satisfy the condition.
* Always includes only elements that return true from the callback.

##MATCH(RegEx) :
* const matches = "hello".match(/l/g);

* Returns an array of matches for a given regular expression.
* If no matches are found, returns null.

##SEARCH(RegEx) :
* const index = "hello".search(/l/);

* Returns the index of the first match for the regular expression.
* Returns -1 if no match is found.

##SOME :
* const result = array.some((item) => item > 5);

* Checks if at least one element satisfies the condition.
* Returns true or false.

##EVERY :
* const result = array.every((item) => item > 0);

* Checks if all elements satisfy the condition.
* Returns true or false.

##INCLUDES : 
* const result = array.includes(5);

* Checks if the array contains a specific value.
* Returns true or false.

##FINDINDEX :
* const index = array.findIndex((item) => item > 5);

* Returns the index of the first element that satisfies the condition.
* Returns -1 if no element is found.

##INDEXOF :
* const index = array.indexOf(5);

* Returns the first index of a given element in the array.
* Returns -1 if the element is not found.

##SORT :
* const sorted = array.sort((a, b) => a - b);

* Sorts the elements of an array in place.
* By default, sorts elements as strings; use a comparison function for numbers.

##SPLIT :
* const result = "a,b,c".split(",");

* Splits a string into an array of substrings based on a specified delimiter. 

##SLICE :
* const result = array.slice(1, 3);

* Extracts a section of an array (or string) and returns it as a new array (or string).
* Does not modify the original array.

##PUSH :
* array.push(4);

* Adds one or more elements to the end of an array.
* Modifies the original array.

##POP : 
* const last = array.pop();

* Removes the last element from an array and returns it.
* Modifies the original array.

##TOSTRING : 
* const str = (123).toString();

* Converts numbers, dates, or arrays into strings.

##TOFIXED : 
* const result = (1.234).toFixed(2);

* Converts a number to a string, keeping the specified number of decimals.

##STARTSWITH : 
* const result = "hello".startsWith("he");

* Checks if a string starts with a specified substring.
* Returns true or false.

##PARSEINT : 
* const num = parseInt("42");

* Converts a string to an integer.

##JOIN :
* const result = array.join("-");

* Converts an array into a string with elements separated by a specified delimiter.

##ARRAY.FROM() :
* const array = Array.from("hello");

* Converts an array-like or iterable object into an array.



















