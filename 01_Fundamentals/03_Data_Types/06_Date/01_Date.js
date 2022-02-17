/////////////////////////////////
// Example

const d = new Date();

////////////////////////////////
// JavaScript Date Output

// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

///////////////////////////////////////
// new Date()
// new Date() creates a new date object with the current date and time:

// Example
const d = new Date();

///////////////////////////////////////////
// new Date(year, month, ...)
// new Date(year, month, ...) creates a new date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// Example
const d = new Date(2018, 11, 24, 10, 33, 30, 0);

///////////////////////////////////////////////////
// Note: JavaScript counts months from 0 to 11:

// January = 0.

// December = 11.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

// Specifying:

const d = new Date(2018, 15, 24, 10, 33, 30);
// Is the same as:

const d = new Date(2019, 3, 24, 10, 33, 30);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

// Specifying:

const d = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:

const d = new Date(2018, 6, 5, 10, 33, 30);

/////////////////////////////////////////
// Using 6, 4, 3, or 2 Numbers

// 6 numbers specify year, month, day, hour, minute, second:

// Example
const d = new Date(2018, 11, 24, 10, 33, 30);

////////////////////////////////////////////////////////////
// 5 numbers specify year, month, day, hour, and minute:

// Example
const d = new Date(2018, 11, 24, 10, 33);

//////////////////////////////////////////////////////////
// 4 numbers specify year, month, day, and hour:

// Example
const d = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day:

// Example
const d = new Date(2018, 11, 24);

// 2 numbers specify year and month:

// Example
const d = new Date(2018, 11);

////////////////////////////////////////////////////////////////////////////////////////////////////
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

// Example
const d = new Date(2018);
