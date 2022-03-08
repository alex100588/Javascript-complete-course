'use strict'


/////// Constructor functions and the new Operator

const Person = function(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear

    // this.calcAge = function(year){
    //     console.log(year - this.birthYear );
    // }
}

const alex = new Person('Alex', 1998)
const jack = new Person('Jack', 2002)
console.log(alex);
console.log(jack);
// alex.calcAge(2022)
// jack.calcAge(2022)

////////////// Prototypes

Person.prototype.calcAge = function(year){
        return year - this.birthYear 
}

console.log(alex.calcAge(2022));
console.log(jack.calcAge(2022));

console.log(alex.__proto__ );
console.log(alex.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(alex));

Person.prototype.name = 'Ionasc'
Person.prototype.species = 'Homo Sapiens'

console.log(alex.name);
console.log(alex.species);
console.log(jack.species);

console.log(alex.hasOwnProperty('firstName'));
console.log(alex.hasOwnProperty('calc'));
