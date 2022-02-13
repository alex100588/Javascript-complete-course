'use strict'

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

console.log(jonasArray);

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name'

console.log(jonas['first'+nameKey]);
console.log(jonas[`last${nameKey}`]);


// const interestedIn = prompt('What do you know about me?')
// console.log(jonas[interestedIn]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and the first one is called ${jonas.friends[0]}`);


const alex = {
  firstName: 'Ionasc',
  lastName: 'Alex',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  birthYear: 1988,
  
  calcAge(){
    return 2022 - this.birthYear
  },

  getSumary(){
    console.log(`${this.firstName} is a ${this.calcAge()} years old`);
  }
};

console.log(alex.calcAge());

alex.getSumary()

///////////////////////////////////////////

        //Coding challenge
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI(){
    return this.mass / this.height ** 2
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height:1.95,

  calcBMI(){
    return this.mass / this.height ** 2
  }
}

const markBmi =mark.calcBMI()
const johnBmi = john.calcBMI()

if(markBmi > johnBmi){
  console.log(`Mark Bmi is ${markBmi} and is greater than Jhon bmi ${johnBmi}`);
}else{
  console.log(`John Bmi is ${johnBmi} and is greater than Mark Bmi ${markBmi}`);
}

