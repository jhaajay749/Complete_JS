//////////////////////////////////////////////////////////////
// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

///////////////////////////////////////////////////////////
// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

// This example slices out a portion of a string from position 7 to position 12 (13-1):

// Example
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

/////////////////////////////////////////////////////////////////////////////////////
// If a parameter is negative, the position is counted from the end of the string.

// This example slices out a portion of a string from position -12 to position -6:

// Example
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);

/////////////////////////////////////////////////////////////////////////////////////////////
// If you omit the second parameter, the method will slice out the rest of the string:

// Example
let part = str.slice(7);

// or, counting from the end:

// Example
let part = str.slice(-12);

////////////////////////////////////////////
// JavaScript String substring()
// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.

// Example
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

// If you omit the second parameter, substring() will slice out the rest of the string.

////////////////////////////////////////////////
// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);

////////////////////////////////////////////////
// If you omit the second parameter, substr() will slice out the rest of the string.

// Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);

// If the first parameter is negative, the position counts from the end of the string.

// Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);

//////////////////////////////////////////////////////////////
// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

////////////////////////////////////////////////////////////////
// To replace all matches, use a regular expression with a /g flag (global match):

// Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

////////////////////////////////////////////////////////////
// Converting to Upper and Lower Case

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

//////////////////////////////////////////////////////////
// JavaScript String toUpperCase()

// Example

let text1 = "Hello World!";
let text2 = text1.toUpperCase();

//////////////////////////////////////////////////
// JavaScript String toLowerCase()

// Example
let text1 = "Hello World!"; // String
let text2 = text1.toLowerCase(); // text2 is text1 converted to lower

/////////////////////////////////////////////////
// JavaScript String concat()
// concat() joins two or more strings:

// Example
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// The concat() method can be used instead of the plus operator. These two lines do the same:

// Example
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

////////////////////////////////////////////////
// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// Example
let text1 = "      Hello World!      ";
let text2 = text1.trim();

////////////////////////////////////////////////////
// JavaScript String Padding
// ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

let text = "5";
let padded = text.padStart(4, 0);

let text = "5";
let padded = text.padEnd(4, 0);

///////////////////////////////////////////////
// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

//////////////////////////////////////////////////////
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// Example
let text = "HELLO WORLD";
let char = text.charAt(0);

/////////////////////////////////////////////////////////
// JavaScript String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

////////////////////////////////////////////////////
// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:

// Example
let text = "HELLO WORLD";
let char = text[0];

//////////////////////////////////////////////////
// Converting a String to an Array

let text = "Hello World !";

// JavaScript String split()
// A string can be converted to an array with the split() method:

// Example
text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe

////////////////////////////////////////////////////
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// Example
text.split("");
