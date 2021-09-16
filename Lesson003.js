// example of functions
function ourFunctionWithArg(a, b) {
    console.log(a - b);
}
ourFunctionWithArg(10, 5); // output 5
//same function name, different function action, the code does the last function action
function ourFunctionWithArg(a, b) {
    console.log(a + b);
}
ourFunctionWithArg(10, 5);  // output 15

// Global Scope and Functions

var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    console.log("Assign 5 to oopsGlobal here");
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output = output + "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output = output + " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


// function  minus 7
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10)); // 10-7 = 3

// function times 5
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(4)); // 4*5 = 20

// undefined value returned fro a function
var sum = 0;
function addFive() {
    sum = sum + 5;
}

// stand in line FIFO nest in line

function nextLine(arr, item) {
    arr.push(item);
    return item;
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Boolean functions
function booleanTrue() {
    return true;
}
console.log(booleanTrue());

// if conditional using an comparison inside if
function ifEqual(a, b) {
    if (a === b) { // there is an strict equality operator ===
        return "Yes, the are equal"
    }
    return "No, they are not equal";
}
console.log(ifEqual(3, "3"));
// if using the boolean vale inside if
function trueOrFalse(wasTrue) {
    if (wasTrue) {
        return "it is true";
    }
    return "it is not true";
}
console.log(trueOrFalse(false));
// inequality operator !=
// strick inequality operator !== compare types too
// over or grater than >
// grater or equal >=
// less than <
// less than or equal <=

// two validations
// AND if (val <= 50 && val >= 25);
// OR if (val <= 50 || val >= 25);

//else or else if
function testElseIf(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than  10";
    } else {
        return "Greater than or equal to 10";
    }
} // when the first condition is met is does not check other conditions
console.log(testElseIf(10));


// https://www.youtube.com/watch?v=PkZNo7MFNFg time 1:25:48