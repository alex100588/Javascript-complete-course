

(function(){
  console.log('This will never run again');
})()

console.log('-------');

(()=>console.log('Only to run once'))()

let a = [1,2,3]
console.log(a.slice(-1).pop());

/////////////////////////////////////////////\

const currencies = new Map([
  ['USD', 'US dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])

currencies.forEach((item, idx, arr)=>{
  console.log(`${item} have the key ${idx}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'EUR',  'GBP', 'EUR' ])
currenciesUnique.forEach((value, key, arr) =>{
  console.log(`The value is ${value} and the idx ${key} that means the index does not exist in sets`)
})