'use strict'

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

const types = []

for(let i=0; i<jonas.length; i++){
    console.log(jonas[i]);
    types.push(typeof jonas[i])
}

console.log(types);

//////////////////////////////////////////////////

const years = [1991, 2006, 2000, 2019]
const ages = []

for(let i=0; i< years.length; i++){
    const age = years[i] - 1988
    ages.push(age)
}

console.log(ages);

// ///////////////////////////////////////////////

const alex = [
    'Ionasc',
    'Alex',
    2037 - 1991,
    'student',
    ['Michael', 'Peter', 'Steven'],
  ];

const backwards = []

for(let i=alex.length-1; i>=0; i--){
    backwards.push(alex[i])
}

console.log(backwards);

//second method
const secondBackwards = []

for(let i=0; i<alex.length; i++){
    secondBackwards.unshift(alex[i])
}

console.log(secondBackwards);

//exercices loop

for(let exercices = 1; exercices < 4;  exercices++){
    console.log(`Starting exercice ${exercices}`);
    for(let rep = 1; rep<=5; rep++){
        console.log(`${rep} repetitons`);
    }
}


/////////////////////////////// 

let rep = 1

while(rep <= 10){
    console.log('rep');
    rep++
}

let dice = Math.round(Math.random() * 6)
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
  }


//////////////////////////////////////////

  const firstArray = [2,3,7,4,6,3]

  let totals = 0

  const calcAverage = function(arr){
    for(let i=0; i<arr.length; i++){
        totals+=arr[i]
    }
    return totals / arr.length
  }

  console.log(calcAverage(firstArray));

/////////////////////////////////////////////////////

const calcTip= function(bill){
    return bill >= 50 && bill <= 300 ?  Math.round(bill /100*15) : Math.round(bill/100*20)
 }

 const bills = [22,255,645,77,324,767,566,234]
 const tips = []
 const totals2 = []

 for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals2.push(bills[i]+tips[i])
 }


 console.log(bills);
 console.log(tips);
 console.log(totals2);

 const calcAvg = function(arr){
     let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i] 
    }
    return sum / arr.length
 }

 console.log(calcAvg(bills));
 console.log(calcAvg(totals2));
 console.log(calcAvg(tips));