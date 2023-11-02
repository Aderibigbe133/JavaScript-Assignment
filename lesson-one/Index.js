// console.log("Hello Javascript!");
// // alert("Hello world!");
// /*
//                                         Declaring Variable
// */

// // Keywords use: var, let, const

// // When inspected it is supposed to bring Whats Stored in the Variable

// let age = 13;

// age = 14;
// console.log(age);

// // When inspected it going to change from 13 to 14

// const firstAge = 12;
// console.log(firstAge);

// // in Const we  cant change the variable like in let

//        //                                                       CLASSWORK 1
//        console.log("                                            CLASSWORK")



//     //    Declared a variable
// let admin;
// let name;


// // We are giving admin the same name with john

// name = "john";
// console.log(name);


// admin = name;
// console.log(admin)

// // We Alerted the Admin 

// alert(admin)


 

// let planetName = "Earth"
// let currentUser = "Alameen"




// // !   DATA TYPES

// // Strings   e.g
// let name = "John Doe"

// // Number
// let age = 30

// // Not a number
// let notANumber =NaN

// // Infinity
// let infinity = Infinity

// // BigInt
// let BigInt = 12345678987456786n

// // Boolean -true or false
//     let isTrue = true
//     let isFalse = false

// // Null
// let nullValue = null

// // undefined
// let undefinedValue = undefined

// // To check the type of variable
// //console.log(type of string)








// const myName = `Alameen`

// const myAge = `23`

// const address = `Aso rock`

// // Template literals

// // we use the dollar sign and the curly bracket when we want to refer to another variable
// const introduction = `My name is ${myName} and i am ${myAge} years old, I live at ${address}`
// console.log(introduction)




// // PROMPT
// const name = prompt(`What is Your Name`)

// alert(`Hello ${name}`)


//                    USE OF PROMPT

//     Assignment


/* const  firstName = prompt(`What is Your First Name`)
const lastName = prompt(`What is Your Last Name`)
const age = prompt(`What is Your Age`)
const color = prompt(`What is Your Favourite Colour`)

 alert(`Hello ${firstName} ${lastName} ! I see that your favourite colour is ${color}. You are ${age} years old.`)

 */

//                      STRINGS METHOD

// *LENGTH
  
 let a = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

result = a.length

console.log(result)

 
 


// *SLICE  (starting index)

 let b = "Geegs for Geeks";
result = b.slice(3, 8);
console.log(result)


let c = "Geegs for Geeks"
result = c.slice(3) 
console.log(result)

// REPLACE METHOD
let d = "Books, Pencils, Biro"
result = d.replace("Pencils", "Egg")
console.log(result)

// REPLACE ALL METHOD
// It replaces everything Pencil with Girl 
let e = "Bag, Pencil, Pencil, Bird"
result = e.replaceAll("Pencil", "Girl")
console.log(result)

// UPPERCASE
let f = "i am a boy"
result = f.toUpperCase()
console.log(result)

// LOWERCASE
let g = "HEY WATSUP LOOKING GOOD"
result = g.toLowerCase()
console.log(result)

// CONCAT (joniing)
// u can use either Backtint(``) or Plus sign(+)

// Concat Method

let h = "Today is"
let i = "monday"
result = h.concat(" ",i)
console.log(result)


// Backtint Method

let j = "Welcome"
let k = "to school"
result = `${j} ${k}`
console.log(result)


// Plus sign method

result = h + " " + i
console.log(result )





// TRIM METHOD
// Trim(It removes the spaces from both ends)
// TrimStart(It removes the spaces from the begining)
// TrimEnd(It removes the spaces from the End)

let l = "Soul";
console.log(l);
result = l.trim()
console.log(result)



// SPLIT METHOD
let m = "Stand-For-All"
result = m.split("-")
console.log(result)
 

// INDEXOFF METHOD
const n = "apple"
result = n.indexOf("e");
console.log(result)


// LASTINDEXOF
const o = "apple, banana, orange"
result = o.lastIndexOf("banana")
console.log(result)


// CHARTAT
// it brings out the character that lands on the number
let p ="He is coming"
result = p.charAt(4)
console.log(result)

//CHARCODEAT
// It brings out the code number for the character

let q = "hello world"
result = q.charCodeAt(0)
console.log(result)

// ENDSWITH METHOD
let r = "welcome To this class"
result = r.endsWith("class")
console.log(result) 


// INCLUDE METHOD
let s = "Precious Love"
console.log(s.includes("Love"))


// SUBSTRING METHOD
const t = "I am learning Java script and it is cool"
console.log(t.substring(5))


// If and Else method
let input = "";

    if (input === "string" ){
        console.log("input is a string");  
    }
    else{
      console.log("input is not a string")
    }



/*     let capital = prompt("What is the capital of Oyo")
if(capital.toLowerCase ()== "Ibadan"){
    alert("Correct")
}
else{
    alert("Wrong")
}
 */

// TO STRINGS


// SEARCH


// PADSTART





// Assignment
/* console.log("                        Assignment")

let l = "Hello World!";
result = l.slice(0, 6);
console.log(result)


let m = "I really likes cats, but some people prefer dogs. cats are great!";
result = m.replaceAll("cats", "dogs");
console.log(result)

let firstName = "John"
let lastName = "Doe"
result = `Your full name is Mr.${firstName} ${lastName}`;
console.log(result)
 */