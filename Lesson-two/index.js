/* Logical Operation */

/* Use of OR(||) */
// let firstName = "Al-ameen";
// let email = "@gmail.com";
// console.log(firstName || email);

// let age = "";
// let number = 8076623935;
// console.log(age || number);

/* Use of AND(&&) */
/* let name = "Car"; true
let colour = "Blue";true
let brand = ""
console.log(name && brand);
 */

// IF and ELSE statements
/* let name = "john"  
let lastName = "doe"
if(name == "john"){
    console.log("Hello i am john")
}
else{console.log("you are not john")} 
 */

// let hour = 9

// if(hour < 10 || hour > 18){
// console.log("We are closed")
// }

/* let hour = 12;
let minutes = 30;

if (hour == 12 && minutes == 30){
    console.log("It`s Time")
} 
else{
   console.log("Time is over")
} */

// ASSIGNMENT

/* 
let ussd = prompt("Enter your USSD code")
if( ussd == "*901#"){
    let options = prompt(`1. Make Transfer
2. Buy Recharge card
3. Check Balance`)

// For Option 1 
if(options == 1){
 let acctNumber = prompt("Enter Reciever Account Number")

 //Condition on the length of the acct number 
 if(acctNumber < 10 || acctNumber > 10){
   alert("Account Number is INVALID")
 }

let acctNo = prompt("Enter Amount")


// Condition for the amount to enter in option1

 


// For Option 2

 if (options == 2){
  let card = prompt("Enter Amount")
//   condition for the amount to nter in option 2

if(card < 100){
    alert("Cannot purchase recharge card of less than 100")
}

else if (card >= 100){
    alert("Purchase Successful")
}
}

//   For Option 3

if (options == 3){
let number = prompt("Enter Account Number")
}
 //Condition on the length of the acct number 

let number = alert("Your Account balance is **********")
}

else{
alert(`WRONG USSD
Please try  *901#`)}
 */

/* SWITCH STATEMENT */
let color = "red";

switch (color) {
  case "blue":
    console.log(`colour is ${color}`);
    break;

  default:
    console.log(`color is not red`);
    break;
}

/* 

// How to create Date in variable

let date = new Date();
console.log(date)
 */

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
    break;

  default:
    day = "No Day";
}
console.log(`Today is ${day}`);



// LOOP

//   For LOOP
//   While LOOP
//   DO while LOOP

// FOR LOOP
 

/* 
An illustration

for(Declaration; Condition; iteration)


n.b( Iteration Stands for Repeation.
     Declaration is the variable given
     Condition is the Condition given like (If, else, else if, Switch))
*/


/* 
Note i++ means

i = 0 + 1
i = 1 + 1
i = 2 + 1

till it reaches the Condition met
*/



for(let i = 0; i < 10; i++){
 console.log (`number${i}`)
}


console.log(` 

`)


for (let x =0; x <= 10; x++){
    if(x === 2){
        console.log(`2 is my favourite Number`);
        // THe continue means BREAK ,    and continue from the next number
        continue;    
    }

    console.log(`Number ` + x)
}


console.log(`

While loop


`)

// WHILE LOOP


let p = 0;
while(p < 10){
    console.log(p);
    p++;
}


console.log(`

DoWhile loop


`)

// Do WHILE
let c = 0
do {
    console.log(c);
    c++;
} while (c < 10); 