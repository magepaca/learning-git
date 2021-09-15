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


