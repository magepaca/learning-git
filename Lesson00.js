/* These are my first lines of code 
and these lines are been pushed to my GitHub account*/

console.log("Hello from JavaScript");
// in-line comment
/* long comment  this is multi-line comment
there can be many lines of comment
*/
// Var declaration
var number = 5;
/* Data types undefined, null, boolean, string, symbol, number, and object */
// boolean is true or false
// var declaration
var myName = "Mario"; // var can be used through the whole program
// let declaration
let ourName = "My first project"; // let can be used only within the scop of where you declare that

// const declaration
const pi = 3.14; // const cannot be changed


/* assigning variables*/
var a; // declaring a without assigning a value 
var b = 2; // declaring b and assigning 2 as value
a = 7; // assigning 7 to a as value
b = a; //assigning b (that used to be 2) to a (that used to be 7) now b is 7 
console.log(a); // printing 7 which is a's value  now
var c = "I'm a string";
console.log(c);
// operators
var sum = 10 + 10;
// subtractions
sum = sum + 3;
console.log(sum);
var myVar = 5;
myVar++;
console.log(myVar);
myVar--;

var product = myVar * sum;
console.log(product);
var coefficient = 24 / 2; // division
console.log(coefficient);
// remainder operator
var remainder = 24 % 2; // the remainder of the division 
console.log(remainder);
console.log(myVar);
/* shortcuts*/
// adding and assigning in the same line
myVar += 4; //is the sames as myVar = myVar + 5;
console.log(myVar);
myVar -= 3; //is the same as myVar = myVar - 3;
console.log(myVar);
myVar *= 10; //is the same as myVar = myVar * 10;
console.log(myVar);
myVar /= 20; // is the same as myVar = myVar / 20;
console.log(myVar);

/* Strings */
var myString = "I want to use \"double\" quoted string within my text";
console.log(myString);
/* Code Output to scape a character with \
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/
// concatenate
var myStr01 = "This is the start. " + "And this is the last part";
console.log(myStr01);
var myStr01 = myStr01 + " And that's it"
console.log(myStr01);
var strLength = 0;
strLength = myStr01.length; // the length is an attribute of the string variable
console.log(strLength);
console.log(myStr01[0]); // the string is a vector an the first position starts in 0
//a string variable cannot be change by vector position
console.log(myStr01[myStr01.length - 1]);
