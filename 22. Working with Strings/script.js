'use strict'

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(airline[5]);
console.log(plane[0]);
console.log('B737'[0]);

console.log('B737'.length);
console.log(airline.length);

console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(1,5));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//////////////////////////////////////////

const checkMiddleSeat = function(seat){
    const mid = seat.slice(-1)
    if(mid === 'B'){
        console.log(`${mid} is the middle seat`);
    }else{
        console.log(`${mid} is not the middle seat`);
    }
}
checkMiddleSeat('11B')
checkMiddleSeat('11C')
checkMiddleSeat('11D')

//////////////////////////////////////

console.log(airline.toLowerCase()); 
console.log(airline.toUpperCase()); 

const passenger = 'aLeXandrU'
const correction = passenger.toLowerCase().replace('a', 'A') 
console.log(correction);

const email = 'hello@yahoo.com'
const loginEmail = '   Hello@yahoo.com'
const lowerEmail = loginEmail.toLowerCase()
const spaceRemove = lowerEmail.trim()
console.log(spaceRemove);
console.log(email === spaceRemove);

const priceGB = '288,97£'
const priceUs = priceGB.replace('£', '$').replace(',', '.')
console.log( typeof Number(priceUs))

const announcement = 'All passengers come to boarding on door 23. Boarding door 23!'
const changeDoor = announcement.replaceAll('door', 'gate')
console.log(changeDoor);

const planes = 'Airbus A320neo'
console.log(planes.includes('A320'));
console.log(planes.startsWith('Air'));

if(planes.startsWith('Ai') && planes.endsWith('neo')){
    console.log(`Plane is part of airbuss family`);
}else{
    console.log(`It's not`);
}

//////////////////////////////

const checkBaggage = function(items){
    if(items.includes('knife') || items.includes('gun') || items.includes('machineGun')){
        console.log('Not allowed');
    }else{
        console.log('Welcome');
    }
}

checkBaggage('I have a laptop, some food and a pocket knife')
checkBaggage('I have a laptop, some food and a pocket gun')
checkBaggage('I have a laptop, some food')