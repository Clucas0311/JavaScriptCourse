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

const function1 = createFunction();
function1(); // => should console.log('hello');
