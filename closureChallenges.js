// Challenge 1
// Create a function createFunction that creates and returns a function.
// When that created function is called, it should print "hello". When you
// think you completed createFunction, un-comment out those lines in the code
// and run it to see if it works.

// create function named createFunction and inside that function's body we will return
// a new function.
// When createFunction is called/() it should print "hello"
// ToDo
function createFunction() {
	return function() {
		console.log('hello');
	};
}

// const function1 = createFunction();
// function1(); // => should console.log('hello');

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function.
// When that created function is called, it should print out the input that was used when the
// function was created.

// create a function called createFunctionPrinter that function should accept one parameter
// name the parameter input
// inside the createFunctionPrinter's body return another function
// inside the return function console.log the parameter

function createFunctionPrinter(input) {
	return function() {
		console.log(input);
	};
}
// // /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// Challenge 3:
// Examine the code for the outer function. Notice that we are returning a function and that
// function is using variables that are outside of its scope.Uncomment those lines of code.
// Try to deduce the output before executing. Now we are going to create a function addByX
// that returns a function that will add an input by x.

function outer() {
	let counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log('counter', counter);
	}
	return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
