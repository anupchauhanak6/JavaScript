// convert into the Number.
console.log("Convert into the Number: ");

let score = "30"
let valueInNumber = Number(score)

console.table([typeof score, score, typeof valueInNumber, valueInNumber]);



// there output is NaN(Not a Number)
let score1 = "30abc"
let valueInNumber1 = Number(score1)

console.table([typeof score1, score1, typeof valueInNumber1, valueInNumber1]);


// if we can input the score value null then output is 0.
let score2 = null
let valueInNumber2 = Number(score2)

console.table([valueInNumber2]);


/*

    convert into the Number and it's output:

    "anup" => NaN  (if the value is string then conersion output is NaN)
    "30" => number
    "30abc" => NaN
    true => 1; false => 0;   (if the value is Boolean then)
    null => 0
    undefined => NaN

*/



// convert into Boolean
console.log("Convert into the Boolean: ");

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)

let isLoggedIn1 = ""
let booleanisLoggedIn1 = Boolean(isLoggedIn1)

let isLoggedIn2 = "anup"
let booleanisLoggedIn2 = Boolean(isLoggedIn2)

console.table([booleanisLoggedIn, booleanisLoggedIn1, booleanisLoggedIn2]);
