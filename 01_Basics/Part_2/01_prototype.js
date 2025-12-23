let computer = {cpu: 'i7', ram: '16GB'};

let lenevo = {
    screen: '4K',
    __proto__: computer
}

let dell = {}

console.log(lenevo,lenevo.__proto__);