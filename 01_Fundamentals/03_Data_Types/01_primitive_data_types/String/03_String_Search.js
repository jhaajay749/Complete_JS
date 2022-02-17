///////////////////////////////////////////
// JavaScript Search Methods

// String indexOf()
// String lastIndexOf()
// String startsWith()
// String endsWith()

///////////////////////////////////////////////
// JavaScript String indexOf()
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

// Example
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

//////////////////////////////////////////////////////
// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");

////////////////////////////////////////////////////////////////////////
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("John");

//////////////////////////////////////////////////////////////////////////////////////
// Both methods accept a second parameter as the starting position for the search:

// Example
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);

////////////////////////////////////////////////////////////////////////////////
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// Example
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate", 15);

///////////////////////////////////////////////////////
// JavaScript String search()
// The search() method searches a string for a specified value and returns the position of the match:

// Example
let str = "Please locate where 'locate' occurs!";
str.search("locate");

/////////////////////////////////////////////////////////////////
// JavaScript String match()
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

// Example 1
// Search a string for "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

///////////////////////////////////////////////////////////////////
// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.

// Example
let text = "Hello world, welcome to the universe.";
text.includes("world");

////////////////////////////////////////////////////////////////////////////////////
// Check if a string includes "world", starting the search at position 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);

//////////////////////////////////////////////////////////////////////////////////////////
// JavaScript String startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false:

// Example
let text = "Hello world, welcome to the universe.";

text.startsWith("Hello");

let text = "Hello world, welcome to the universe.";

text.startsWith("world"); // Returns false

let text = "Hello world, welcome to the universe.";

text.startsWith("world", 5); // Returns false

let text = "Hello world, welcome to the universe.";

text.startsWith("world", 6); // Returns true

////////////////////////////////////////////////////////////////////
// JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value, otherwise false:

// Example
// Check if a string ends with "Doe":

var text = "John Doe";
text.endsWith("Doe");

// Syntax
// string.endswith(searchvalue, length)
// Parameter Values
// Parameter	Description
// searchvalue	Required. The value to search for.
// length	Optional. The length to search.

///////////////////////////////////////////////////
// Check in the 11 first characters of a string ends with "world":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
