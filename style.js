console.log("hello, welcome to DIF fist class!");

// Basic Datatypes

/**
 * Number
 * Sting
 * Boolean
 * Null
 * Undefiend
 */

// Example of Number 0 -INFINITY
// 2, 10, 30 40, -10
// console.log (2 % 10);

    // string: A string is a sequence of charachters all enclosed in quotes.
    // Operation on string: Concatenation,Substring, Length, Indexing, Slincing

    console.log("Hello" + "world")

    // Booling: A datatype using to verify whether a statemet is true or false
   
    // Comparison Operators: ==, !=, >, <, >=, <=
    console.log(2 < 4)

    // Assignemet: Your name, diffrent between null and undifiend

    // Collection: Array, objects

    // Array: A collection of data enclosed in block braces,separated by comm(,)
    //  Example: [1, 2, 3, 4, 5]

    // Object: A collection of data enclosed in curly braces, separated by comm (,)
    // Example: {name: "peter", age: 30}

    var name ="peter";
    console.log(name)
    console.log(name)
    console.log(name)
    console.log(name)
    console.log(name)

    var abba = {
        firstName:"Abba",
        lastName: "Adobawa",
        age: 25,
        favoriteColor: "blue"
    }



const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]
console.log("There are "+ NUMBER.length + "element in the array")

// Last element in the array
//console.log(NUMBER[NUMBER.length - 1])
   
// Conditional statement: if-else statement
 
 //let a = 20
 //let b = 15

 //if (a > b){
  //  console.log("a is greater than b")
 //}
 //else{
 //   console.log("b is greater than a")
// }

// Loops: for, while
// Definition: A loop is a statement that will repeat a block of code as long as a certain codition is true.

// while loop: keeps running as long as the condition in its bracket is true
let a = 20
let b = 15

//while (a > b){
  //  console.log(a)
  // a = a - 1 // a = 19, 18..15 *
  //}

  // for loop: Keeps running as long as the condition in its bracket is true
  // Example: Iterate over an array of number
  for (let i =0; i < NUMBER.length; i++){
    console.log("The number at index " + i + " is " + NUMBER[i])
  }


