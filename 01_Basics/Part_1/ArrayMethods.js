// map [transform elements in an array]
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]
console.log('Doubled:', doubled);

// filter [filter elements based on a condition]
const evens = nums.filter(n => n % 2 === 0); // [2]
console.log('Evens:', evens);

// reduce [reduce to a single value]
const sum = nums.reduce((acc, n) => acc + n, 0); // 6
console.log('Sum:', sum);

// forEach [execute a function for each element]
nums.forEach(n => console.log(n));
console.log('Original array:', nums);

// find and findIndex [search for an element in an array]
const users = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
const user = users.find(u => u.id === 2); // find {id: 2, name: 'B'}
const index = users.findIndex(n => n.id === 1); // findIndex returns index (0)

console.log('find user id is 2: ',user)
console.log('find Index for user id 1:', index)

// some and every [test whether some or all elements pass a test]
const hasNegative = [1, -2, 3].some(n => n < 0); // true
const allPositive = [1, 2, 3].every(n => n > 0); // true

console.log('All Positive:', allPositive)
console.log('Has any Negative:', hasNegative)

// prototype in js [different methods]
let computer = {cpu: 'i7', ram: '16GB'};
let lenevo = {
    screen: '4K',
    __proto__: computer
}
let dell = {}

console.log('lenevo', lenevo, lenevo.__proto__);

// includes [which shows whether an element exists in an array or not]
const fruits = ['apple', 'banana'];
console.log('is apple available:', fruits.includes('apple')); // true 
console.log('is grape available:', fruits.includes('grape')); // false

// sort [sorts the elements of an array in place and returns the sorted array]
const letters = ['b', 'a', 'c'];
letters.sort(); // ['a', 'b', 'c']
console.log('Sorted letters:', letters);