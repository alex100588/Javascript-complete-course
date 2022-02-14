
const numbers = [1, 2, 3, 4, 5]
const numbers2 = [1, 2, 3, 4, 5]
const numbers3 = [1, 2, 3, 4, 5]

const removed = numbers.splice(0,2)
console.log(removed);
console.log(numbers);

const removed2 = numbers2.splice(1,1, 'Alex')
console.log(removed2);
console.log(numbers2);

const removed3 = numbers3.splice(2, 0, 'middle 1',  'middle2')
console.log(removed3);
console.log(numbers3);