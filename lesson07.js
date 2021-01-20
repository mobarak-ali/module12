// 12-7 Mathematical operations in JavaScript

var price1 = 25;
var price2 = 35;

// Simple Math

// Addition 
var total = price1 + price2;
console.log(total); //60

// Substruction
var difference = price2 - price1;
console.log(difference); // 10

// Multiplication
var multi = price1 * price2;
console.log(multi); //875

// Division 
var division = price2/price1;
console.log(division); // 1.4

// Modulas ভাগশেষ
var mod = price2 % price1;
console.log(mod); // 10


// Increment value
var num = 5;
var newNum = num + 1;
console.log(newNum); // 6

// But you can increment value of a variable 
// without assign value to a new variable.
 num++; // adds 1 to the value of num
 console.log(num);  // 6

// Another way for increse the value by 1
 num+=1; // Adds 1 to the value of num
 console.log(num);  // 7

// Same way you can use decrement of value
num-- ;     // 7-1 = 6
num -= 1;   // 6-1 = 5

console.log(num); // 5

//Adding Sting Value together

var item = "Pen";
var itemPrice = 10;
var total = item + itemPrice;
console.log(total);
var fName = "Barak";
var lName = "Obama";
var fullName = fName + lName;
console.log(fullName);
// adding space 
fullName = fName + ' ' + lName;
console.log(fullName);