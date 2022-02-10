const age1 = 15
const isOldEnough = age1 >=18
console.log(isOldEnough);

if(isOldEnough){
    console.log('Sarah can start driving licence 🚗');
}else{
    const yearsLeft = 18-age1
    console.log(`Must wait another ${yearsLeft} years`);
}


const birthYear1 = 1991
let century
if(birthYear1 >= 2000){
     century = 20
}else{
     century = 21
}

console.log(century);

/////////////////////////////////////

const inputYear = '1991'

console.log(inputYear)
console.log(Number(inputYear));
console.log(inputYear + 22);
console.log(Number(inputYear) + 22);
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 11);
console.log('23' + '10' + 11);
console.log('23' * '2');
console.log('23' / '2');


// 5 falsy values = NaN, 0, '', null, undefined

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Alex'));
console.log(Boolean({}));

const money = 0

if(money){
    console.log("Don't spend it all");
}else{
    console.log('You should get a job');
}


let height = 0
if(height){
    console.log('Height is defined');
}else{
    console.log('Height is undefined');
}

const age = 18

if(age === 18) console.log('You just became an adult');
if(age == 18) console.log('You just became an adult');
if(age == '18') console.log('You just became an adult');
if(age === '18') console.log('You just became an adult');

const favourite = prompt(`What's your favourite number?`)

console.log(favourite);
console.log(typeof(favourite));
console.log(Number(favourite));
console.log(typeof(Number(favourite)))

if(favourite === 23){
    console.log('23 is an amazing number');
}else if(favourite == 7){
    console.log('7 is also a cool number');
}else{
    console.log('Number is not 23 or 7');
}

const nextNumber = Number(prompt('select another number'))

console.log(nextNumber);

if(nextNumber === 23){
    console.log('Great');
}