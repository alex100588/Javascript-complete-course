

const numbers = [1, 2, 3, 4, 5]

const nums = numbers.forEach(num => console.log(num))

const newNums = numbers.forEach((nums, idx, arr)=>{
    console.log(`Num at position ${idx} is ${nums} and the array numbers are ${arr}`)
})

console.log(newNums);

// Calculate sum of array

let total = 0
numbers.forEach(num => total+=num)

console.log(total);

// How many times a letter appears in a array

const letters = ['a', 'b', 'c', 'd', 'd', 'e', 'b', 'c', 'd', 'e']

const duplicates = {}

letters.forEach(item=>{
    duplicates[item] ? duplicates[item]++ : duplicates[item] = 1
})

console.log(duplicates);


                 