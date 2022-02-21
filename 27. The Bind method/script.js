const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    })
  }
}

const eurowings = {
  airline: "eurowings",
  iataCode: 'EW',
  bookings: []
}

const bookEW = lufthansa.book.bind(eurowings)
console.log(bookEW( 125, 'Samsonica'));

/////////////////////////
const book = {
  title: 'Memories',
  author: 'Mircea'
}

const info= function(year){
  console.log(`${this.title} was written by ${this.author} and was realease in ${year}`);
}

const perm = info.bind(book)
console.log(perm(1998));

const bookEW23 = lufthansa.book.bind(eurowings, 23)
bookEW23('alex')
bookEW23('Martha Cooper')

//With event listeners

lufthansa.planes = 300
lufthansa.buyPlane = function(){
  //console.log(this);
  this.planes++
  console.log(this.planes);
}
const permBind = lufthansa.buyPlane.bind(lufthansa)

document.querySelector('.body').addEventListener('click', permBind)


///////////////////////////

const addTax = (rate, value) => value + value * rate

console.log(addTax(0.1,200));

const addVAT = addTax.bind(null, 0.15)
console.log(addVAT(123));
console.log(addVAT(13));

const addTaxx = function(rate){
  return function (value){
    return value + value * rate
  }
}
const addVAT2 = addTaxx(0.22)
console.log(addVAT2(100));
console.log(addTaxx(122)(0.10));