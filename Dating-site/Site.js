// ClassWork
// Create a dating app

function minus(a, b) {
  return a - b;
}

function checkAge(age) {
  if (age < 18) {
    // return False
    let results = minus(18, age);
    console.log(`Please try again in ${results}years`);
  } else if (age < 35) {
    // return true
    console.log("Enjoy the site");
    
  } else {
    // Return False
    console.log("You are to old");
  }
}
let name = alert("Welcome to Cupidabo")

let input = prompt("How old are you");

checkAge(input)
