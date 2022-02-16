////////////////
// Array

//////////////////////////////////////////////////////////////////////////////
// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

const array_name = [item1, item2];

const cars = ["Saab", "Volvo", "BMW"];

const points = new Array();
const points = [];

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// Accessing Array Elements
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

// Array Properties
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;

// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
Array.isArray(fruits);

const fruits = ["Banana", "Orange", "Apple"];

fruits instanceof Array;
