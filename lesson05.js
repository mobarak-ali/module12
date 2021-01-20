var pormise = "I promise I will work hard to become a programmer.";
// single quote
var singleQuote = 'This string is using single quote';
console.log(singleQuote);
// double quote
var doubleQuote = "This string is using double quote";
console.log(doubleQuote);

//backtrick
var backTric = `This string is using backtrick`;
console.log(backTric);


//changing an string to Lower Case
singleQuote.toLowerCase();
console.log(singleQuote); // will not work

console.log(singleQuote.toLowerCase()); // Makes it lowerCase
console.log(singleQuote.toUpperCase()); // Makes it UpperCase

// Find something in the string
// find word 'single'
console.log(singleQuote.indexOf("single")); // 21

console.log(singleQuote.split('is')); // Omits the string 'is' and splits it form here
console.log(singleQuote.split(' ')); // Omits all blank string and makes an array or rest

console.log(singleQuote.split('Find')); // If not found gives full string as single array value



console.log(singleQuote.indexOf('Find')); // If not found return -1






