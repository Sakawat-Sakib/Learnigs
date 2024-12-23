##setup: install jest, edit script "test":"jest"


#unit test : testing small part of the application i.e function.

#jest has the access of all test file.

#built in function (i.e test) in jest are globally available during run time so that we don't need to import them in code. We just call the function in code.

#MATCHER:
*toBe(value): Checks if a value is strictly equal (===) to another.

*toEqual(value): Checks if two values (objects or arrays) have the same structure and content.

*toBeNull(): Verifies if a value is null.

*toBeUndefined(): Verifies if a value is undefined.

*toBeDefined(): Checks if a value is defined (not undefined).

*toBeTruthy(): Checks if a value evaluates to true.

*toBeFalsy(): Checks if a value evaluates to false. i.e 0, nul, false

*toBeGreaterThan(number): Verifies if a value is greater than the specified number.

*toBeGreaterThanOrEqual(number): Checks if a value is greater than or equal to a number.

*toBeLessThan(number): Verifies if a value is less than the specified number.

*toBeLessThanOrEqual(number): Checks if a value is less than or equal to a number.

*toBeCloseTo(number, numDigits?): Asserts that two floating-point numbers are close to each other.

*toMatch(regexpOrString): Validates if a string matches a given regex or string.

*toContain(item): Checks if an array or iterable contains a specific item.

*toContainEqual(item): Checks if an array contains an object with a structure equal to the specified item.

*toHaveLength(number): Verifies the length of an array, string, or iterable.

*toHaveProperty(keyPath, value?): Checks if an object has a property with a specific key and optional value.

*toThrow(error?): Asserts that a function throws an error (optionally matching a specific error or message).

*toThrowError(error?): Similar to toThrow, but ensures it's an instance of Error.


##TEST ASYNC CODE: (need to use return for Promise)
*resolves
*rejects

##MOCK FUNCTION:
*toHaveBeenCalledWith(arg1, arg2, ...) : Asserts that a mock function was called with specific arguments.
*spy : later


###Codevolution (React based testing): Not finished
#jest : javascript testing framework
#RTL: react testing library (use to work with DOM)

#test types : unit(single block), integration(combination of few unit), End to End(entire application)
#TDD: (Test Driven Developement) Tests are written before the actual implementation of the code
