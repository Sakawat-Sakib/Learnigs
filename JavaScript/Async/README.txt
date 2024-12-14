(codevolution*)

ASYNCHRONOUS JavaScript


- javascript is a synchronous, blocking, single-threaded language

- function A ()
- function B ()
- A ()
- B ()
- B function will not execute until function A executed



- Traditional method to achieve asynchronous ability (setTimeout and setInterval)
-- setTimeout()
-- setInterval()
-- In this way setTimeout function will be called and ID of setTimeout function will be stored in the variable :

        const timeOutId = setTimeout(()=>{
            greet()
        },3000)
-- These functions are not part of javaScript. They are from browser.



- CALLBACK
-- passing function (callback function) as an arg in another function (higher order function)
-- two types : sync callback and async callback



- PROMISES
-- It is JavaScript object
-- three states : pending , fulfilled, rejected
-- resolve (called : pending -> fulfilled) , reject (called : pending -> rejected) both are function
-- promise function will run asynchronously
-- promise.all throw error if single promise is rejected


- async await
-- async function always return a promise


- EVENT LOOP
-- see video if you forget

SEE THIS CODE FOR BETTER UNDERSTANDING (wrapper function used): (When to Use async/await/promise/then Keyword)

*If you explicitly use the Promise constructor, you do not need async:

function createPromise(param) {
    return new Promise((resolve, reject) => {
        if (param > 0) {
            resolve(`Parameter is positive: ${param}`);
        } else {
            reject('Parameter must be greater than 0');
        }
    });
}

// Usage
createPromise(5)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


*When using async, the function automatically returns a promise. You don't explicitly use new Promise:

async function checkParam(param) {
    if (param > 0) {
        return `Parameter is positive: ${param}`; // Automatically resolves
    } else {
        throw new Error('Parameter must be greater than 0'); // Automatically rejects
    }
}

// Usage
checkParam(5)
    .then((result) => console.log(result)) // Output: Parameter is positive: 5
    .catch((error) => console.error(error));

*With await:
async function checkParam(param) {
    if (param > 0) {
        return `Parameter is positive: ${param}`;
    } else {
        throw new Error('Parameter must be greater than 0');
    }
}

async function main() {
    try {
        const result = await checkParam(5);
        console.log(result); // Output: Parameter is positive: 5
    } catch (error) {
        console.error(error.message);
    }
}

main();

**NOTE: await can only be used inside an async function

