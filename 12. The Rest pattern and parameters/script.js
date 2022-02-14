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

  orderFood(idx,mainIngredient, ...otherIngredients){
    console.log(`we will make your ${this.mainMenu[idx]} with principal ingredient ${mainIngredient} and the others you choose: ${otherIngredients}`);
  }
}

restaurant.orderFood(0,'garlic','cheese', 'mushrooms')
restaurant.orderFood(1,'kiwi','cheese', 'mushrooms', 'flour', 'tomato')

const [...items] = restaurant.mainMenu
console.log(items);

const [firstitem, secondItem, ...restOfItems] = [...restaurant.mainMenu, restaurant.categories]
console.log(firstitem, secondItem, restOfItems);


//spread because is on right side of the = operator
const arr = [1, 2, ...[3,4, 5]]

//rest because is in the left sight of the = operator
const [...newArr] = arr
console.log(newArr);

const [a, b, ...others] = [4, 5, 6, 7, 8, 9]
console.log(a,b, others);

   //rest with objects
const {sat, ...weekdays} = restaurant.openingHours
console.log(sat, weekdays);

// rest with functions
const add =function(...nums){
  let totals = 0
  nums.forEach(num => totals += num)
  console.log(totals);
}
add(2,3)
add(2,3,4)
add(2,3,5,6,7)

const x =[23,3,44] 
add(...x)
