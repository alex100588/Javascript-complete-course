const numbers = [1, 2, 3, 4, 5, 6, 22, 9]

 const totals = numbers.reduce((acc,item)=>{
     return acc+item
 },0)

 console.log(totals);


 const maximumofArray = numbers.reduce((acc, value, idx, arr)=>{
     if(acc > value){
         return acc
     }else{
         return value
     }
 },0)

 console.log(maximumofArray);

 const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 3
    },
    {
        name: 'tablet',
        price: 300,
        count: 12
    },
    {
        name: 'desktop',
        price: 800,
        count: 7
    }
]

const totalValue = products.reduce((acc, item)=>{
    return acc + (item.price * item.count)
}, 0)

console.log(totalValue);