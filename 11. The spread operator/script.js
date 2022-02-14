'use strict'

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
   openingHours: {
     thu: {
       open: 12,
       close: 22,
     },
     fri: {
       open: 11,
       close: 23,
     },
     sat: {
       open: 9, 
       close: 24,
     },
   },

   orderPasta(ing1, ing2, ing3){
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
   }
}

const ingredients = [prompt("Let's make pasta with ing 1"), prompt("Let's make pasta with ing 2"), prompt("Let's make pasta with ing 3")]

restaurant.orderPasta(...ingredients)

const newMenu = ['Bread', ...restaurant.mainMenu]

console.log(newMenu);

const arr = [2, 3, 4, 6, 7]

const newArr= [1, 2, ...arr]

console.log(newArr)
console.log(...newArr)


// Copy array
const mainMenu = [...restaurant.mainMenu]
console.log(mainMenu);

//Join 2 arrays
const joinArrays = [...restaurant.mainMenu, ...restaurant.categories]
console.log(joinArrays);

const str = 'Alexandru'
console.log(...str);
console.log([...str]);
console.log({...str});


