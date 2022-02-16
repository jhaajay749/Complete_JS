/////////////////////////////////////
// Sorting an Array
// The sort() method sorts an array alphabetically:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//////////////////////////////////////////////
// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

///////////////////////////////////////////////////////////////////////////////
// Numeric Sort

// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

// Example
const points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) {
  return a - b;
});

// Use the same trick to sort an array descending:

// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
