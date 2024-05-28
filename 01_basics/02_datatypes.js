"use strict"; //treated as a new version of JS 
//alert("Please"); // we are using code space not browser

let age = 30; // integer
let temperature = 98.6; // float
console.log(typeof age); // "number"
console.log(typeof temperature); // "number"



let name = "Alice";
console.log(typeof name); // "string"

let isStudent = true;
console.log(typeof isStudent); // "boolean"

let unassigned;
console.log(typeof unassigned); // "undefined"

//null is standlone value
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof null); // "object" (this is a known quirk in JavaScript) 
//unique value
let uniqueId = Symbol('id');
console.log(typeof uniqueId); // "symbol"

let bigNumber = BigInt(123456789012345678901234567890);
console.log(typeof bigNumber); // "bigint"

//object
let person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(typeof person); // "object"
