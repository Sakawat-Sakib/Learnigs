const sum = require('./sum');
const fetchData = require('./sum');
const fetchPromise = require('./sum');

// test('adds 1+2 to equal 3',()=>{
//     expect(sum(1,2)).toBe(3);
// })

// test('Object assignment',()=>{
//     const data = {one:1};
//     data['two'] = 2;
//     expect(data).toEqual({one:1,two:2});
// })

// test('the data is peanut butter',(done)=>{
//     const cb = (data) =>{
//         try {
//             expect(data).toBe('peanut butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(cb);
// })

// test("the data is peanut butter",()=>{
//     return expect(fetchPromise()).resolves.toBe('peanut butter')
// })

// test("the data is peanut butter",async ()=>{
//     const data = await fetchPromise();
//     expect(data).toBe('peanut butter')
// })

// test('mock implementation of a basic function',()=>{
//     const mock = jest.fn(x=>42+x);
//     expect(mock(1)).toBe(43);
//     expect(mock).toHaveBeenCalledWith(1);
// })