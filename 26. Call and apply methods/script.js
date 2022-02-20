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

lufthansa.book(239, 'Alex Ionasc')
lufthansa.book(635, 'John Smith')
console.log(lufthansa.bookings);

const eurowings = {
  airline: "eurowings",
  iataCode: 'EW',
  bookings: []
}

lufthansa.book.call(eurowings, 2, 'Mark')
console.log(eurowings);
lufthansa.book.call(lufthansa, 33, 'Chris')

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'LX',
  bookings : []
}

lufthansa.book.call(swiss, 55, 'Elron')

//Apply method

const flightData = [583, 'George Cooper']

lufthansa.book.apply(swiss, flightData)
lufthansa.book.apply(swiss, [111, 'Alexandra'])


///////////////////////////////

const book = {
  title: 'Memories',
  author: 'Mircea'
}

const info= function(year){
  console.log(`${this.title} was written by ${this.author} and was realease in ${year}`);
}

info.call(book, 1991)