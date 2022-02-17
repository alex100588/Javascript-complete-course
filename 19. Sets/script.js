'use strict'

const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
])

console.log(orderSet);

console.log(new Set('Alexandru'));
console.log(orderSet.size);
orderSet.delete('Pasta')
console.log(orderSet);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic')
console.log(orderSet);

const values = [...orderSet]
console.log(values);

const newOrder = [...new Set(orderSet)]
console.log(newOrder[0]);
console.log(newOrder[1]);
console.log(newOrder[2]);

console.log(new Set('alexandruIonasc').size);