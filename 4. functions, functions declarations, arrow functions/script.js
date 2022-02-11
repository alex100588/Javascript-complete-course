'use strict'

function logger(){
    console.log('My name is Alex');
}

logger()

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}

console.log(fruitProcessor(5,0))
const appleJuice = fruitProcessor(3,2)
console.log(appleJuice);

const num = Number('23')

console.log(num);


function calcAge1(birthYear){
    return 2022 - birthYear
}

console.log(calcAge1(1988));
console.log(calcAge1(1991));
console.log(calcAge1(1995));


const calcAge2 = function(birthYear){
    return 2022 - birthYear 
}

console.log(calcAge2(1999));

const calcAge3 = birthYear => 2022 - birthYear

console.log(calcAge3(1997));

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2022 - birthYear
    const retirement = 60 - age
    return `Hy ${name} ,you have ${age} years old and you have ${retirement} years to wait until retirement`
}
 
console.log(yearsUntilRetirement(1988, 'Alex'));


