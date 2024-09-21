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
