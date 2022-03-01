'use strict'

const date = new Date()

console.log(date);

console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())


//////////////////

setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza 🍕 with ${ing1}🧀 and ${ing2}🥓`);
}, 2000, 'cheese', 'bacon');

setInterval(() => {
   const now = new Date()
   //console.log(now);
}, 1000);


////////////////////

