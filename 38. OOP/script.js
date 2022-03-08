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
