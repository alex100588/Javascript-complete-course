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


Person.prototype.unique = function(arr){
    return [...new Set(arr)].join(' ')
}

console.log(alex.unique([2,3,4,4,2,2]));

//////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make, speed){
    this.make = make
    this.speed = speed

}

Car.prototype.accelerate = function(){
    this.speed +=10
    return `${this.make} is going with ${this.speed}`
}

Car.prototype.decelerate = function(){
    this.speed -=10
    return `${this.make} is going with ${this.speed} km/h`
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

console.log(bmw);
console.log(mercedes);

console.log(bmw.accelerate());
console.log(bmw.accelerate());

console.log(mercedes.accelerate());
console.log(mercedes.accelerate());
console.log(mercedes.accelerate());

console.log(bmw.decelerate());
console.log(bmw.decelerate());
console.log(bmw.accelerate());

console.log(mercedes.decelerate());
console.log(mercedes.accelerate());
console.log(mercedes.decelerate());


////////// ES6 Classes

class PersonCL{
    constructor(firstName, birthYear){
        this.firstName = firstName
        this.birthYear = birthYear
    }

    calcAge(){
        return 2022- this.birthYear
    }
}

const jessica = new PersonCL('Jessica', 1996)
console.log(jessica);
console.log(jessica.calcAge(1996));

///// Setters and getters

const account = {
    owner: 'Alex',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop()
    },
    
    set latest(mov){
        this.movements.push(mov)
    },

    get age(){
        return 2037 - 2020
    }
}

console.log(account.latest);
account.latest = 30
account.latest = 22
console.log(account.movements);

console.log(account.age);


/// Set property that already exists as setter
class Person2{
    constructor(fullName, birthYear){
        this.fullName = fullName
        this.birthYear = birthYear
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName = name
        else alert(`${name} is not full name`)
    }

    get fullName(){
        return this._fullName
    }
}

const alina = new Person2('anca dave', 2018)
console.log(alina);
console.log(alina.fullName);


////Object .create

const PersonProto = {
    calcAge(year){
        console.log(2037 - year);
    }
}

const steven = Object.create(PersonProto)
console.log(steven);
steven.name = 'steve'
steven.age = 22
steven.calcAge(2022)
console.log(steven);

//////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car1{
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }

    accelerate(){
        this.speed +=10
        return `${this.make} is going with ${this.speed}`
    }
    
    brake(){
        this.speed -=10
        return `${this.make} is going with ${this.speed} km/h`
    }
    
    get speedUS(){
        return this.speed / 1.6
    }

    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

const car1 = new Car1('Ford', 120)
car1.accelerate()
console.log(car1.speedUS);
car1.speedUS = 60
console.log(car1);
