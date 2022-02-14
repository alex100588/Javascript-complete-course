

 const numbers1 = [1,2,3,4,5]

 // return double of each number
 
 const doubled = numbers1.map(num => num * 2)
 console.log(doubled);
     
 // Multiply the vaue by the index
 
 const multiplyValue = numbers1.map((item, idx) =>{
     return item * idx
 })
 
 console.log(multiplyValue);
 
 // Total values of products
 
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
 
 
 const totals = products.map(item =>{
     return {
         name: item.name,
         totalValue: item.price * item.count
     }
 })
 
 console.log(totals);
 
 
 // Conversion
 
 const stringNumbers = ['1', '2', '3', '4']
 
 const convertedNums = stringNumbers.map(num => Number(num))
 
 console.log(convertedNums);
 