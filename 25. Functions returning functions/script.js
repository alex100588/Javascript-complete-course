
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('hey')
greeterHey('Alex')
greeterHey('Steve')
greet('hi')('again')



const greetArr = greeting => age => console.log(`${greeting} ${age}`);

greetArr('Anca')(22)

const birth = function(year){
  return function (month){
    console.log(`You are born in ${year} and in month ${month}`);
  }
}

birth(1991)('May')
birth(2019)('July')
birth(1988)('Aug')


const calcAge = function(birthyear){
  return function(currentYear){
    return `You have ${currentYear -birthyear} years old`
  }
}

console.log(calcAge(1991)(2022));
console.log(calcAge(prompt('Insert birth year'))(prompt('insert current year')));
