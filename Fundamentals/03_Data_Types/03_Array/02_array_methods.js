/////////////////////////////////////////////
// Array Methods

// Converting Arrays to Strings

//toString()
const fruitsList = ["Banana", "Orange", "Apple", "Mango"];

fruitsList.toString();

//join()
fruitsList.join("*");

// Popping and Pushing

//The pop() method removes the last element from an array
let fruit = fruitsList.pop();

//The push() method adds a new element to an array (at the end):
fruitsList.push("Kiwi");

// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

// delete()
// Warning !
// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

// Merging (Concatenating) Arrays

// Example (Merging Two Arrays)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// The concat() method does not change the existing arrays. It always returns a new array.

// Example (Merging Three Arrays)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

// The concat() method can also take strings as arguments:

// Example (Merging an Array with Values)

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter");

////////////////////////////////////////////
// Splicing and Slicing Arrays

// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

///////////////////////////////
// Array splice()
// The splice() method can be used to add new items to an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

// Using splice() to Remove Elements

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.

//////////////////////////
// Array slice()

// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
