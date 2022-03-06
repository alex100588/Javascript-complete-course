'use strict'

// some
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30]

const deposits = movements.some(item => item > 120)
const deposits2 = movements.some(item => item === -150)

console.log(deposits, deposits2);

//////////////////////////////////

const numbers = [ 1, 2, 3, 4, 5]

console.log(numbers.some(num => num > 4));
console.log(numbers.some(num => num > 6));

/////////////////////

const persons = [
    {
        name: 'Alex',
        age: 25
    },
    {
        name: 'Ivan',
        age: 16
    },
    {
        surname: 'Ionela',
        age: 28
    },
]

const adults = persons.some(pers => pers.age >= 18)
console.log(adults);


//every

console.log(movements.every(mov => mov > -3300));
console.log(movements.every(mov => mov > 200));

console.log(numbers.every(num => num > 2));

console.log(persons.every(pers => pers.name !== undefined));

////////////////////////

const arrays = [
    [2, 3, 4],
    [3, 6, 2],
    [0, 9, 3],
]

console.log(arrays.every(arr => Array.isArray(arr)));