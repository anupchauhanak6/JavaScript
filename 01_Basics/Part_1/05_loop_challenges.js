/*
    write a 'for' loop that multiplies each element of the array [2,4,6] by 2 and stores the result in a arrray named 'mulitpliesNumber'
*/

let number = [2,4,6];
let mulitpliesNumber = [];

for(let i = 0; i < number.length; i++) {           // for(i of number) {
    mulitpliesNumber.push(number[i] * 2)
}


/*
    write a 'for' loop that loops through the array ['green tea', 'black tea', 'chai', 'oolang tea'] and the stop the loop when if finds 'chai'
*/

let teas = ['green tea', 'black tea', 'chai', 'oolang tea'];
let selectTeas = []

for(let i = 0; i < teas.length; i++) {
    selectTeas.push(teas[i])

    if(teas[i] === 'chai') break;
}

console.log(selectTeas);
