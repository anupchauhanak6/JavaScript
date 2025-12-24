//prototype in js

let computer = {cpu: 'i7', ram: '16GB'};

let lenevo = {
    screen: '4K',
    __proto__: computer
}

let dell = {}

// console.log(lenevo,lenevo.__proto__);


let car = {tyres : "4"}

let tesla = {
    driver: 'AI'
}

Object.setPrototypeOf(tesla, car)

console.log("tesla", tesla, ', and tyre:', tesla.tyres, ',', Object.getPrototypeOf(tesla)); //different methods
