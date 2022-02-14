'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    getValues(idx1, idx2){
        console.log(this.categories[idx1], this.starterMenu[idx2]);
    },

    orderFood(idx,mainIngredient, ...otherIngredients){
        console.log(`we will make your ${this.mainMenu[idx]} with principal ingredient ${mainIngredient} and the others you choose: ${otherIngredients}`);
      }
}

if(restaurant.orderFood){
    restaurant.orderFood(1, 'mushrooms', 'spinach')
}
restaurant.orderFood ? restaurant.orderFood(1, 'mushrooms', 'spinach') : "Dosen't exist"
restaurant.orderFood && restaurant.orderFood(1, 'mushrooms', 'spinach')

console.log(restaurant.getValues(1,1));
restaurant.getValues && restaurant.getValues(2,0)
restaurant.getValues && restaurant.getValues(0,2)

console.log('------------OR ------------');


restaurant.numGuest = 23
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10

console.log(3 || 'Alex');
console.log(0 || 'Alex');
console.log('' || 1);
console.log(null || false || 3);
console.log(null || false || 3 || 22);
console.log(undefined || null || 'Al');


console.log(guest1);

const guest2 = restaurant.numGuests || 3
console.log(guest2);

console.log('------------AND ------------');

console.log(3 && 'Alex');
console.log(0 && 'Alex');
console.log('' && 1);
console.log(5 && false && 3);
console.log(null && false && 3 && 22);
console.log(undefined && null && 'Al');
console.log(false && true);
console.log(true && false);
console.log('alex' && 'anca' && 22 && 0 && false );

console.log('------------Nullish Coalescing operator ------------');

const guests = restaurant.numGuest = 0
const guestCorrect = guests ?? 10
console.log(guestCorrect);

const rest1 = {
    name: 'Capri',
    numGuests: 20
}

const rest2 = {
    name : 'La Piazza',
    owner: 'Giovanni Rossi'
}

rest2.numGuests =rest1.numGuests || 10
rest2.numGuests ||= 10
console.log(rest2);

rest1.owner ||=rest2.owner
console.log(rest1);

rest2.name ||= 'Alex'
console.log(rest2);