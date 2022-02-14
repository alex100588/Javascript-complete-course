
const numbers = [ 1, 2, 3, 4, 5, 6 ,3, 2, 5]

const evenNumbers = numbers.filter(num => num % 2 ===0)
console.log(evenNumbers);

const people = [
    {
        name: 'Alex',
        age: 26
    },
    {
        name: 'Ivan',
        age: 18
    },
    {
        name: 'Jay',
        age: 15
    },
    {
        name: 'Ana',
        age: 13
    },
]

const adults = people.filter(pers => pers.age >=18)
console.log(adults);

const removeDuplicates = numbers.filter((val, idx, arr) => {
    return arr.indexOf(val) === idx
})

console.log(removeDuplicates);