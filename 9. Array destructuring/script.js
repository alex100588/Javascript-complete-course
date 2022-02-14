'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

console.log(restaurant.order(0, 0));
console.log(restaurant.order(1, 2));

const [firstItem, secondItem] = restaurant.order(1, 2)
console.log(firstItem, secondItem);



   // basics

const arr = [1,2,3]
const [a,b,c] = arr

console.log(a,b,c);
console.log(arr);

const [first, ,second] = restaurant.categories

console.log(first, second);

let [main, secondary] = restaurant.categories
console.log(main, secondary);

   // switching items

[main, secondary] = [secondary, main]
console.log(main, secondary);

   //nested arrays

const nested = [2,4, [5,6]]
const [x,y, [q,r]] = nested
console.log(x,y,q,r);

const [l,m,n] = nested
console.log(l,m,n);

   //default values

const [e=1, f=2, g=3] = [4,5]
console.log(e, f, g);