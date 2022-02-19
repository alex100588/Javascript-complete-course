'use strict'

console.log('a+very+nice+string'.split('+'));
console.log('Ionasc Alexandru'.split(' '));

const [firstName, lastName] = 'Ionasc Alexandru'.split(' ')

console.log(firstName, lastName);

const arr = ['Mr.', firstName, lastName.toUpperCase()]
console.log(arr.join(' '));

const passenger = 'jessie'
const newPassenger = passenger.split('')[0].toUpperCase() + passenger.slice(1)
console.log(newPassenger);

//capitalize name
const capitalizeName = function(name){
    const names = name.split(' ')
    const namesUppers = []

    for(const n of names){
        //const uppers = n[0].toUpperCase() + n.slice(1)
        const uppers = n.replace(n[0], n[0].toUpperCase())
        namesUppers.push(uppers)
    }
    return namesUppers.join(' ')
}

console.log(capitalizeName('alex ion'))
console.log(capitalizeName('alina anca'))

///////////////////////////////////////////

const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Alex'.padStart(25, '-').padEnd(30, '-'));

//Card conversion of numbers
const maskCreditKard = function(number){
    const convertToStr = String(number)
    const conversion = convertToStr.slice(-4).padStart(convertToStr.length, '*')
    console.log(conversion);
}

maskCreditKard(234523452344)
maskCreditKard(2345234)
maskCreditKard(23452345234454)
maskCreditKard('234523452344')

////////////////////////////////////////

const message2 = 'Bad wheater...'
console.log(message2.repeat(12));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)}`);
}
console.log(planesInLine(2));
console.log(planesInLine(12));