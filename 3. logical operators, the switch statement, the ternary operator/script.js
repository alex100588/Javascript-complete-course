
const hasDriverLicence = true
const hasGoodVision = false

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence)



if(hasDriverLicence && hasGoodVision){
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
}


if(hasDriverLicence || hasGoodVision){
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
}


const isTired = false

if(hasDriverLicence && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
}

if(hasDriverLicence && hasGoodVision || !isTired){
    console.log('Sarah is able to drive');
}else{
    console.log('Someone else should drive');
}


////////////////////////////////////////////////////////////
// Coding Challenge 

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

const teamDolphins = (97 + 112 + 101) /3
const teamKoalas = (109 + 95 + 106) / 3

console.log(teamDolphins);
console.log(teamKoalas);

if(teamDolphins > teamKoalas && teamDolphins >=100){
    console.log('Dolphins win the trophy 🏆');
}else if(teamDolphins < teamKoalas && teamKoalas >=100){
    console.log(`Koalas won the trophy 🏆`);
}else if(teamDolphins === teamKoalas){
    console.log("It's a draw ");
}else{
    console.log('No one wins the trophy 😒');
}


////////////////////////////////////////////////

const day = 'thursday'

switch(day){
    case 'monday':
        console.log("It's monday");
        break
    case 'thusday':
        console.log("It's thusday");
        break
    case 'wednesday':
        console.log("It's wednesday");
        break
    case 'thursday':
        console.log("It's thursday");
        break
    case 'friday':
        console.log("It's friday");
        break
    case 'saturday':
        console.log("It's saturday");
        break
    case 'sunday':
        console.log("It's sunday");
        break
}

////////////////////////////////////////

const age = 23

age > 18 ? console.log('I like to drink wine') : console.log('I like to drink wather');;

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


//Coding Challenge 

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉*/

const bill = 400
const tip = bill <= 300 && bill >= 50 ? bill /100 * 15 : bill /100 * 20

console.log(`The bill value is ${bill} and the tip is ${tip}% and the total value is ${bill+tip}`);