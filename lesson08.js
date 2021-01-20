// 12-8 Math absolute round floor ceil random

//Absoulate value
var number = -5;
var absulateNumber = Math.abs(number);
console.log(absulateNumber);

// Resutns Absuolate value
console.log("Math.ceil()");
console.log(Math.abs(-5)); 
console.log(Math.abs(5)); 

// Returns Round Value but count fraction as whole Number
console.log("Math.ceil()");
console.log(Math.ceil(7.01));
console.log(Math.ceil(7.49));
console.log(Math.ceil(7.51));
console.log(Math.ceil(7.99));

// Returns Round Value but removes fraction value totally
console.log("Math.floor()");
console.log(Math.floor(3.01));
console.log(Math.floor(3.49));
console.log(Math.floor(3.51));
console.log(Math.floor(3.99));

// Returns Round Value to the closest Round Value
console.log("Math.round()");
console.log(Math.round(7.01));
console.log(Math.round(7.49));
console.log(Math.round(7.51));
console.log(Math.round(7.99));

//Random Value
console.log('Math.randon()');
var randValu = Math.random() * 10;
var outputRand = Math.round(randValu);
var outputCeil = Math.ceil(randValu);

console.log(randValu);
console.log("Random ", outputRand);
console.log("Ceil ", outputCeil);

// 0 = 0.49
// 1 = 1.49
// 2 = 2.49
// 3 = 3.49
// 4 = 4.49
// 5 = 5.49
// 6 = 6.49
// 7 = 7.49
// 8 = 8.49
// 9 = 9.49
