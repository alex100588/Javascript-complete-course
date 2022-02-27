'use strict'

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];

// Adding all positive sums togeder

//const bankDepositSum = accounts.flatMap(acc =>acc.movements).flat()
const bankDepositSum = accounts
.flatMap(acc =>acc.movements)
.filter(dep => dep > 0)
.reduce((acc, val) => acc + val,0)

console.log(bankDepositSum);


// Getting the length of all deposits greatear than 1000
const numDeposits1000 = accounts.map(acc =>acc.movements)
.flat()
.filter(mov => mov > 1000).length

console.log(numDeposits1000);

const num2Deposits1000 = accounts.flatMap(acc => acc.movements)
.reduce((acc, cur) =>{
   return cur >= 1000 ? ++acc : acc
},0)

console.log(num2Deposits1000);

// Create an object wich contains the sum of deposits and the withdrawals

const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
.reduce((acc, num)=>{
    num > 0 ? acc.deposits +=num : acc.withdrawals +=num
    return acc
},{deposits: 0, withdrawals: 0})

console.log(deposits, withdrawals);



// Create an object wich contains the length of deposits and the withdrawals
const totals = accounts.flatMap(acc => acc.movements)
.reduce((acc, num)=>{
    num > 0 ? acc.deposits ++ : acc.withdrawals ++
    return acc
},{deposits: 0, withdrawals: 0})

console.log(totals);

//capitalize all word with exceptions
const convertTitleCase = function(title){
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with']

    const titleCase = title.toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase()+ word.slice(1))
    .join(' ')
    return titleCase
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));
console.log(convertTitleCase('this is a nother title with an EXAMPLE'))