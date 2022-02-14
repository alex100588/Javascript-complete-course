
const a = [1, 2, 3]
const b = [4, 5, 6]

const concatenation = a.concat(b)
console.log(concatenation);

const nums = [...a, ...b]
console.log(nums);

console.log(a, b);
nums.push(8)
console.log(nums);

const l = [1, 2, 3]
const m = [4, 5, 6]
const n = [4, 6, 9]
const p = [4, 6, 9]

const o = l.concat(m, n, p)
console.log(o);