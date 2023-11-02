// ARRAYS

// Declarations Of ARRAYS
// let (variable name) = [ ]


// ARRAY METHODS
// Nb They are more array method
/* 
1. .push()

2. .pop()

3. .shift()

4. .unshift()

5. .delete()

6. .splice()

7. .slice()

8. concat()

9. .forEach()

10. .filter

11. .map()
*/



// .push()
// It is used to add an item to the end of an array
// Example 1
let arr = ["orange"]
 arr.push("Banana")

console.log(arr) 

// Example2
let items = [1, 2, 3, 4]
items.push(5)
console.log(items)


// .pop()
// It removes an item from the Endof an Array
// Example 1
let bag = ['books', 'pen', 'pencils', 'Toy'];
bag.pop();
console.log(bag)



// .shift()
// It removes items from the begining
// Example 1
let school = ['play stations', 'teachers', 'student']
school.shift()
console.log(school)



// .unShift()
// It addsitems from the begining
// Example 1
let gamingRoom = ['play stations', 'X-Box']
gamingRoom.unshift('Nintendo Switch')
console.log(gamingRoom)



// .delete()
// It removes an item from an Array without reducing the length of an array
// Nb u start counting from 0
let word = ['i', 'go', 'home']
delete word[1]
console.log(word)



// .splice()

// it can (insert & replace), remove an element 

// remove

/* splice(start, deleteCount)
The start tells it where to start   While the delecount count tells it how many to delete
 */


let array = ["i", "study", "javascript"]
array.splice(1, 1) // from index 0 remove one element
console.log(array) 


// Insert and Replace Method
/* splice(start, deleteCount then u put what u want to replace with)*/

let insert =["i", "study", "javascript"]
insert.splice(0, 2, "html", "Css")
console.log(insert)




// Slice Method
// Same with slice method in string method
let letter = ['a', 'b', 'c', 'd', 'e']
console.log(letter.slice(1,3))



// Concat
//It joins

let number = [0, 1, 2, 3, 4]

console.log(number.concat([5, 6, 7, 8, 9]))












console.log(`
Presentations   

`)
// join
const frut = ["Banana", "Orange", "Apple", "Mango"];
console.log(frut.join(" - "))

// Flat
const myArr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(myArr)
console.log(myArr.flat())



// Filter
const ages = [12, 33, 16, 40, 10, 25, 12];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18 && age <= 40
}
console.log(result)

// Map
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr)