'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours= {
    [weekdays[1]]: {
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
  }
  console.log(openingHours.tue);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  orderFood(idx,mainIngredient, ...otherIngredients){
    console.log(`we will make your ${this.mainMenu[idx]} with principal ingredient ${mainIngredient} and the others you choose: ${otherIngredients}`);
  }
}
console.log(restaurant.openingHours);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

for(const item of menu){
    console.log(item);
}

for(const [idx, itm] of menu.entries()){
    console.log(idx, itm);
}

console.log(...menu.entries());