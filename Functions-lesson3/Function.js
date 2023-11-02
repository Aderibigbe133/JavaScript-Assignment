/* 
// FUNCTIONS

//Declarations of function
function myfunction (parameter){
    // CODES
}

//Adding Parameters
function addSum(a, b) {     
    return a / b

};










let result = addSum(3, 2)
console.log(result)

// Find the Area of a triangle using the formular (1/2b*h)  let b = 2 and h = 4

function triangle (b, h){
    return 1/2 *2 *4
};

let results = triangle(2, 4)
console.log(results)


// LOCAL AND GLOBAL VARIABLE variables

// Local 
function myfunction(){
    let message = "Hello World"
    console.log(message);
}

myfunction() 



// Global Variable
let answer = "i am a boy"
function hello(){
    console.log(answer)
}
hello()
// alert(answer)




function checkAge(age) {
    if(age >= 18){
        return true
    }
    else{
        return confirm ("Do you have Permission")
    }
}


let age = prompt("How Old are you?")

if(checkAge(age)){
    alert("Access Granted")
}
else{
    alert("Access denied");
}
 */


// Classwork one
/*   let school = alert("Welcome to Nigerian Defence Academy(N.D.A)")

function checkAge(age){
    if(age >= 16 && age <= 20){
        return true
    }
    else{
        alert("You are too young to attend this School")
    }
}

let age = prompt("How Old are you?")

if (checkAge(age)){
    alert("Welcome To this School")
}
else{
    alert(`Please Come in a few years Later
           When reached the recommended Age`)
} */


// Classwork two

/* function myName(names){
return  `My name is ${names} and i am a human being`
}
 


let name = prompt("What is your name")


console.log(myName(name))
 */


/* 
Example
Get the difference of the sum of two families
 */


//  For the funstions differnce between the sum of the tw/oo families
// const  getAgeGap = function (age1, age2){
// const newAge = age2 - age1
// return newAge
// };

// // For the function of the sum of the families members 
// const  getAgeSum = function (age1, age2){
//     const newAge = age1 + age2
//     return newAge 
// };

//     const famOneFirst = 12;
//     const famOneSecond = 16;

//     const famTwoFirst = 20;
//     const famTwoSecond = 30;

//     const famDiff = getAgeGap(
//         getAgeSum(famOneFirst, famOneSecond), 
//         getAgeSum(famTwoFirst, famTwoSecond)
//     );

//     console.log(famDiff)








    // SIMPLE CALCULATOR
/* 
* Create a calculator

* The Function should take in 3 argument: num1, num2 and operator

* The function should return the result of the operatiobetween num1 and num2
*/


    // The logic on the calculator


/*  function calculateValue(num1, num2, operator){
    // Giving the condition
   switch(operator){
    case "Multiply":
        console.log(num1 * num2);
        break;
    
    case "Divide":
        console.log(num1 / num2)    
   break

   case "Add":
    console.log(num1 + num2)
    break

    case "Subtract":
        console.log(num1 - num2)    
   
    
   }
 }   

 calculateValue(3, 12, "Multiply");
 calculateValue(34, 17, "Divide");
 calculateValue(76, 34, "Subtract");kzz
 calculateValue(36, 12, "Add");
 */




//  ARROW FUNCTION


/*   
(= () =>)
the brackets contain the argument

*/


// Different ways of writing Arrow Function

// const sayHelo = () => {
//     console.log("Hello")
// }

// const sayHi = () => console.log("hi!");

// //If only one Argument
// const addNumbers = num1 => num1 + 2
// console.log("Alameen")
// //For two Argument
// const numbers = (nums1, nums2) => nums1 + nums2
// console.log("Aderibigbe")

// // Invoking the Function
// sayHelo()
// sayHi()
// addNumbers()
// numbers()