'use strict'

const bookings = []

const createBooking = function(flightNum, numPassengers = 3, price = 232 * numPassengers){
    //ES5
    // numPassengers = numPassengers || 3
    // price = price || 155

    const booking ={
        flightNum,
        numPassengers,
        price
    }
    bookings.push(booking)
    console.log(bookings)
}

createBooking('LH123', 2)
createBooking('KM123', 4, 155)


/////////////////////////////////////////////

const oneWord = function(str){
   return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function(str, fn){
    console.log(`Transformed string: ${fn(str)}`);
}

transformer('Javascript is the best', upperFirstWord)