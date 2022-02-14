
const names = ['Florin', 'Ivan', 'Liam', 'Jai', 'Alex']

const sorted = names.sort()
console.log(sorted);

const numbers = [2, 4, 1, 65, 23, 7, 44]

const nums = numbers.sort()
console.log(nums);

const numbersSorted = numbers.sort((a,b)=> a-b)
console.log(numbersSorted);

const descendingOrder = numbers.sort((a,b)=> b-a)
console.log(descendingOrder);

const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
]

const sortedByPrice = products.sort((a,b)=>{
    return a.price - b.price
})
console.log(sortedByPrice);