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

//Object.keys()
for(const i of Object.keys(openingHours)){
  console.log(i);
}

for(const days of Object.keys(openingHours)){
  console.log(`The restaurant is opened ${days.length} days`);
}

const properties = Object.keys(openingHours)
console.log(properties);
let openStr = `We are open on ${properties.length} days: `

for(const days of properties){
  openStr += `${days}, `
}
console.log(openStr);


//Object.values()
for(const hours of Object.values(openingHours)){
  console.log(hours);
}

for(const hours of Object.values(openingHours.thu)){
  console.log(hours);
}


//Object.entries
const entries = Object.entries(openingHours)
console.log(entries);

for(const x of entries) console.log(x);
for(const [x, y] of entries){
  console.log(`On ${x} we are opened at ${y.open} and closed after ${y.close}`);
}
for(const [x, {open, close}] of entries){
  console.log(x, open, close);
}