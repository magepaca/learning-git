//first function exercise
function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result = "the " + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
    return result;
}
console.log(wordBlank("dog", "big", "ran", "slowly"));
console.log(wordBlank("cat", "black", "sleeps", "daily"));

//Array manipulation examples
var ourArray = ["Text", 1, 0, true];
console.log(ourArray);
ourArray[2] = [9, 3, 0]; // you can add an array within an array
console.log(ourArray);
ourArray.push(["happy", "days"]); // push function adds a final element to the array
console.log(ourArray);

// pop function removes the final from array
ourArray.pop();
console.log(ourArray);

// shift function removes the final from array
ourArray.shift();
console.log(ourArray);

// unshift function adds an initial element to the array
ourArray.unshift("Unshift");
console.log(ourArray);

// multidimensional arrays like a matrix
var myArray = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

console.log(myArray[0][0]);
console.log(myArray[1][1]);
console.log(myArray[2][2]);
console.log(myArray);

// Second example of Function

function ourSecondFunction() {
    console.log("Print function");
}
ourSecondFunction();

// Function with vale within
var cont = 0;
function ourThirdFunction(count) {
    count++;
    console.log(count);
}
ourThirdFunction(2);

//scope of the variables is based on where those are declared
//Global is when the variable is declared outside the function
//if the 'var' keyword is not used whe the declaration is made within the function the variable becomes global

// https://www.youtube.com/watch?v=PkZNo7MFNFg min 59

