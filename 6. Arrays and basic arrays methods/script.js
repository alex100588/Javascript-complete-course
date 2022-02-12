'use strict'

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']

console.log(friends);

const years = [1994, 1991, 2022, 2008]

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]= 'Alex'
console.log(friends);

const jonas = ['Jonas', 'Alex', 2002-1991, 22, friends]

console.log(jonas);
console.log(jonas.length);

const newarr = jonas.flat(Infinity)
console.log(newarr);
console.log(newarr.length);


const calcAge = function(birthYear){
    return 2022 - birthYear
}

const years1 = [2009, 1998, 2002, 1988]

console.log(calcAge(years1[1]));
console.log(calcAge(years1[2]));

const ages = years1.forEach(year => console.log(calcAge(year)))

const newFriendsArray = ['Michael', 'Steven', 'Peter', 'Bob']

newFriendsArray.push('John')
console.log(newFriendsArray);
newFriendsArray.unshift('John');
console.log(newFriendsArray);

// Remove elements
newFriendsArray.pop(); // Last
const popped = newFriendsArray.pop();
console.log(popped);
console.log(newFriendsArray);

newFriendsArray.shift(); // First
console.log(newFriendsArray);

console.log(newFriendsArray.indexOf('Steven'));
console.log(newFriendsArray.indexOf('Bob'));

newFriendsArray.push(23);
console.log(newFriendsArray.includes('Steven'));
console.log(newFriendsArray.includes('Bob'));
console.log(newFriendsArray.includes(23));

if (newFriendsArray.includes('Steven')) {
  console.log('You have a friend called Steven');
}


/////////////////////////////////////////////////////

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

// TEST DATA: 125, 555 and 44

// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉


const bills = [125, 555, 44]


const calcTip= function(bill){
   return bill >= 50 && bill <= 300 ?  Math.round(bill /100*15) : Math.round(bill/100*20)
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
const allTotals = totals.reduce((acc, item )=> acc+item)
console.log(allTotals);

console.log(bills, tips, totals);