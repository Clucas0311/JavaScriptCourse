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
// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');
