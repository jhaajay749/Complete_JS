/////////////////////////
// Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:


// Example 1
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x


// Example 2
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element



// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError


// This will result in a ReferenceError:
carName = "Volvo";
let carName;


// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.

// Example
// This code will not run.

carName = "Volvo";
const carName;




// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.

// Example 1 does not give the same result as Example 2:

// Example 1
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y


// Example 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y