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

   order(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }, 

   orderDelivery({time, adress, mainIndex, starterIndex}){
      console.log(`Order receved ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} ${time} adress is ${adress} `);
   },

   weekDaysOpened({monday, tuesday, wednesday, thursday, friday, saturday, sunday}){
      console.log(`Restaurant is open on monday at ${monday},
       on tuesday ${tuesday},
       on wednesday ${wednesday}, 
       on thursday ${thursday}, 
       on friday ${friday}
       on saturday ${this.openingHours.sat.open}
       on sunday ${this.openingHours.sat.open}
       `);
       
   }
 };

 restaurant.weekDaysOpened({
   monday: '22:30',
   tuesday: '12:00',
   wednesday: '12:30',
   thursday: '11:20',
   friday: restaurant.openingHours.fri.open,
   saturday: '12',
   sunday: '11:00'
 })


 restaurant.orderDelivery ({
    time: '22:30',
    adress: restaurant.location,
    mainIndex:2,
    starterIndex:  1
 })

  restaurant.orderDelivery({
    time: '22:30',
    adress: 'Via del sole',
    mainIndex: 1, 
    starterIndex: 2
 })



    

    //Destructuring
 const {name, categories, openingHours} = restaurant
 console.log(name, categories, openingHours);
 
    // Reasigning names
 const {name: restaurantName, categories: hours, openingHours: tags} = restaurant
 console.log(restaurantName, hours, tags);

   //default values
const {menu = [], starterMenu: starters ='Pizza'} = restaurant

console.log(menu, starters);



   // basics
const obj = {a: 23, b: 7, c: 14}

const {a, b, c} = obj
console.log(a,b,c);

const {x, y, z} = {x:2, y:3, z:6}
console.log(x, y, z);


let l = 22
let m = 33
const obj2 ={ l: 3, m: 6}

console.log(obj2);

({l, m} = obj2)

console.log(obj2);

// Nested objects
const {fri: {open, close}} = restaurant.openingHours

const {thu: {open: thuOpen, close: thuClose}} = restaurant.openingHours

console.log(open, close);
console.log(thuOpen, thuClose);