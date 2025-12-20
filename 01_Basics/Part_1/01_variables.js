const accountId = "10293848"
let accountEmail = "anup@gmail.com"
var accountPassword = "123345"
accountCity = "Lucknow"

// accountId = "2039484" // Not allow to change this value

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])


console.log("after change the value: ");

accountEmail = "ak@gmail.com"
accountPassword = "22222222"
accountCity = "Varansi"
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer to not to use var
because of issue in block scope and functional scope
*/
