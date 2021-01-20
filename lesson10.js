// 12-10 Multiple conditions, fulfill both conditions, else if

var jobPaiso = true;
var savingAmmount = 50000;

if(jobPaiso == true && savingAmmount > 200000){
    console.log("Aso tomar patri khuji");
} else if (jobPaiso == true){
    console.log("Aro sobur koro");
} else{
    console.log("Tor kopalae biya nai");
}

console.log("&&")
console.log(true    && true);   // ture
console.log(false   && true);   // false
console.log(true    && false);  // false
console.log(false   && false);  // false

console.log("||")
console.log(true    || true);   // true
console.log(false   || true);   // true
console.log(true    || false);  // true
console.log(false   || false);  // false