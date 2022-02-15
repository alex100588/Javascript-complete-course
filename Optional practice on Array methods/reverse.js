
const arr = [1, 2, 3, 4, 5]

const newArr = [...arr].reverse()
console.log(newArr);
console.log(arr);

// const reversed = arr.reverse()
// console.log(reversed);
// console.log(arr);

const str = 'Coding is fun!'

const revStr = str.split(' ').reverse().join(' ')
console.log(revStr);