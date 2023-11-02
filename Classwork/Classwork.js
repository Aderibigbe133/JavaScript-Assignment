/* let name = alert("Welcome to RHEEDAS PASTRIES")
let foodStuff = prompt(`Please Place Your Order
1. Cakes
2. Small chops
`)

switch(foodStuff){
    case "1":
       let cakeAmount = prompt(`What type of Cake do need
1. Vanilla
2. Chocolate
3. Red Velvet
4. Fruit Cake
5. Carrot Cake
6. Orange Cake
`)

} */


    // SIMPLE CALCULATOR
 
// * Create a calculator

// Declaring Different Functions For Each Operator
const Multiply = (a, b) => a * b;

const Add = (a, b) => a + b;
const Divide = (a, b) => a / b;

const Subtract = (a, b) => a - b;

const calculateValue = (a, b, operators) => {
    switch(operators){
    case "Multiply":
    return Multiply(a, b)
    break

    case "Divide":
    return Divide(a, b)
    break
       
    case "Add":
        return Add(a, b)
        break
        
    case "Subtract":
        return Subtract(a, b)
        break
   }
}

// What to Calculate
const multiply1= calculateValue(3, 12, "Multiply")
console.log(multiply1)

const divide1=calculateValue(34, 17, "Divide")
console.log(divide1)

const subtract1=calculateValue(76, 34, "Subtract")
console.log(subtract1)

const add1=calculateValue(36, 12, "Add");
console.log(add1)

