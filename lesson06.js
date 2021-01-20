// 12-6 integer float parseInt parseFloat type conversion

var number1 = 25;
var number2 = 15.5; // Float variable বা ভাংতি অর্থাৎ পুরো সংখ্যা না এমন।

console.log(number1 + number2); // 40.5

// আরা যদি আমরা আগের ভেরিয়েবলের ভ্যালুগুলো কোটেশনের মাঝে রাখতাম  আর তারপর
// যদি এগুলোকে যোগ করতে চাইতাম তবে কী ঘটতো?
var num = 25;
var num1 = '25';
var num2 = '15.5';
console.log(num+num2); // 2515.5 আমারা পাবো!

// কিম্বা এমন যদি হয় একটি স্ট্রি আর অন্যটি নাম্বার ভ্যালু ধারণ করে তবে যোগ করলে কী হবে?
console.log(num+num2);// এখানেও 2515.5 আমারা পাবো!

// এটাকে আমরা কয়েক ভাবে সমাধান করতে পারি।
// ১. parseInt() ও parseFloat() এর মাধ্যমে
num3 = parseInt(num2);      // gets 15
num4 = parseFloat(num2);    // gets 15.5
console.log(num+num3);      // 40 আমারা পাবো!
console.log(num+num4);      // 40.5 আমারা পাবো!

// We can also use a trick to make an intiger to string like below
var initVal = 50;
console.log(typeof initVal);
var stringVal = ''+initVal;
console.log(typeof stringVal);

var fractionVal1 = 0.1;
var fractionVal2 = 0.2
var total = fractionVal1 + fractionVal2;

console.log(total); // 0.30000000000000004
// to fix this use toFixed()
// toFixed(1) value inside the function means
// how many digit you wnat to display after decimal
console.log(total.toFixed(1)); // 0.3
console.log(total.toFixed(3)); // 0.300





