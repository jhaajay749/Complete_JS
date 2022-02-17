/////////////////////////////////////
// Scope

// Scope determines the accessibility of variables

////////////////////////////////////////
// JavaScript has 3 types of scope

// Block scope
// Function scope
// Global scope

/////////////////////////////////////////////
// Block scope

// ES6 introduced two important new JavaScript keywords: let and const

// These two keywords provide Block Scope in JavaScript

{
  let x = 2;
}
// x can NOT be used here

{
  var y = 2;
}
// y CAN be used here

////////////////////////////////////////
// Function scope

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

///////////////////////////////////
// Global Scope

let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
