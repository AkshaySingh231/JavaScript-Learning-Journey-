"use strict"; // Treat all js code as newer version 
//alert("New learning about Data types");   ------------>>>     // this will not work in node js ,it works in browser;

let name = "John"; // String literal
let age = 30; // Number literal
let isAdmin = true; // Boolean literal
let height; // Undefined literal
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt literal    
let symbol = Symbol("id"); // Symbol literal
let person = null; // Null literal

console.log(typeof name);
console.log("Name:", name);                 // Output: Name: John  