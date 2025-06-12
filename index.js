console.log("Hello, welcome to DIF first class!");

// 🧠 Basic Data Types:
/**
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 */

// ✅ Number Example
console.log("2 % 10 =", 2 % 10); // Remainder: 2

// ✅ String Example
// A string is a sequence of characters enclosed in quotes.
// String operations: Concatenation, Substring, Length, Indexing, Slicing
console.log("Hello" + " World"); // Output: Hello World

// ✅ Boolean Example
// A Boolean is used to verify if a statement is true or false.
console.log("Is 2 less than 4?", 2 < 4); // true

// ✅ Null vs Undefined
let myName = "Abba";
let nullValue = null;        // intentionally empty
let undefinedValue;          // declared, not assigned

console.log("My Name:", myName);
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);

// ✅ Collection Types: Arrays & Objects

// 📦 Array Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
console.log("There are " + numbers.length + " elements in the array");
console.log("Last element in the array is:", numbers[numbers.length - 1]);

// 🧑 Object Example
const abba = {
  firstName: "Abba",
  lastName: "Adobawa",
  age: 25,
  favoriteColor: "blue"
};

console.log("User Info:", abba);

// 🔁 Conditional Statement: if-else
let a = 20;
let b = 15;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than or equal to a");
}

// 🔁 While Loop: runs while the condition is true
let x = a;
while (x > b) {
  console.log("x =", x);
  x--; // reduce x by 1
}

// 🔁 For Loop: iterate over an array
for (let i = 0; i < numbers.length; i++) {
  console.log("The number at index " + i + " is " + numbers[i]);
}
