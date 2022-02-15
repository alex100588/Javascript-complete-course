'use strict'

const openingHours= {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, 
      close: 24,
    },
  }
  

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  orderFood(idx,mainIngredient, ...otherIngredients){
    console.log(`we will make your ${this.mainMenu[idx]} with principal ingredient ${mainIngredient} and the others you choose: ${otherIngredients}`);
  }
}


console.log(restaurant.openingHours.mon);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.sat);
console.log(restaurant.openingHours.sat?.open);
console.log(restaurant.openingHours?.fri?.open);
console.log(restaurant?.openingHours?.fri?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for( const day of weekdays){
    console.log(`On ${day} we ${openingHours[day] && 'open at ' + openingHours[day].open || 'are closed' }`);
}

console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderFood?.(1, 'cheese', 'bacon'));

const users = [{
    name: 'alex',
    email: 'alex@yahoo'
}]

console.log(users[0]?.name || 'empty');
console.log(users[1]?.name || 'empty');