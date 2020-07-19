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
		console.log(counter++);

		console.log('counter', counter);
	}
	return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

//Challenge 3
// Examine the code for the outer function. Notice that we are returning a function
// and that function is using variables that are outside of its scope.
// Uncomment those lines of code. Try to deduce the output before executing.
//  Now we are going to create a function addByX that returns a function that will
//   add an input by x.
function addByX(x) {
	let counter = x;
	return function(y) {
		return counter + y;
	};
}
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// Challenge 4
// Write a function once that accepts a callback as input and returns a function.
//  When the returned function is called the first time, it should call the callback
//  and return that output. If it is called any additional times, instead of calling
//  the callback again it will simply return the output value from the first time it
//  was called.

// create a function that has one parameter and the argument placed in that parameter will be
// a callback
// in the function body of once returns a function
// when the return function is invoked callback(input)
// let output = callback(input)
// if argument ===> return argument
function once(func) {
	let input; // create a variable to test
	function inner(x) {
		if (input === undefined) {
			input = func(x);
		}

		return input;
	}
	return inner;
}
// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// Challenge 5
// Write a function after that takes the number of times the callback needs to be
// called before being executed as the first parameter and the callback as the second
// parameter.

// create a function named "after" and it is going to check how many times the callback
// needs to invoked in parameter 1
// parameter two will contain the callback
// we will need counter
// counter will need to incremented everytime the callback is invoked

function after(count, func) {
	counter = 0;
	function inner() {
		counter++;
		if (counter < count) {
		} else {
			return func();
		}
	}
	return inner;
}

// const called = function() {
// 	console.log('hello');
// };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait
//  in milliseconds before allowing the callback to be invoked as the second parameter.
//   Any additional arguments after wait are provided to func when it is invoked.
//   HINT: research setTimeout();

// create a function named delay its going to have a paramter which argument will be a callback
// callback is function within a function
// wait will be the second parameter - and it will be the time before callback is invoke
// so the callback needs to have a pause before it is invoked
//  return function is going to invoke the callback and there will be a time delay with its
// invocation

function delay(func, wait) {
	return setTimeout(func, wait);
}
// let count = 0;
// const delayedFunc = delay(() => count++, 1000);
// delayedFunc();
// console.log(count); // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

//Challenge 7
// Write a function rollCall that accepts an array of names and returns a function.
// The first time the returned function is invoked, it should log the first name to the console.
// The second time it is invoked, it should log the second name to the console, and so on, until
// all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

// create a function named rollCall and it will have one parameter
// the one parameter will take in an argument that will be an array
// the function will also return another function
// each time the returned function is invoked it will give the position of the array
// so if i call 1 rollCall() = the first element of the array
// 2 rollCall ==> return the second position of the array...
// How can we access each position
// We know we can create counter(backpack) in the first function set equal to zero
// in the returned we can increment the counter
// so everytime the function it is incremented by one
// in the return function counter is going to be in  the position of the index - zero based

function rollCall(names) {
	let counter = 0;
	function inner() {
		let incrementer = names[counter++];
		if (counter > names.length) {
			return 'Everyone accounted for';
		}
		return incrementer;
	}
	return inner;
}

// const rollCaller = rollCall([ 'Victoria', 'Juan', 'Ruth' ]);
// console.log(rollCaller()); // => should log 'Victoria'
// console.log(rollCaller()); // => should log 'Juan'
// console.log(rollCaller()); // => should log 'Ruth'
// console.log(rollCaller()); // => should log 'Everyone accounted for

//Challege 8
// Create a function saveOutput that accepts a function (that will accept one argument),
//  and a string (that will act as a password). saveOutput will then return a function
//  that behaves exactly like the passed-in function, except for when the password string
//   is passed in as an argument. When this happens, the returned function will return an
//   object with all previously passed-in arguments as keys, and the corresponding outputs
//   as values.

// create a function named saveOutput that will have two parameters
// one parameter will accept and argument ==> callback, the other will accept a string == password
// so this is closure returning an inner function
// the inner function will take callback function and when the sting is placed inside as an argument
// it will return an object the passed in arguments ===> strings as keys and the outputs of the callback invoked as
// values
// return object[string] = callback(string)
// ToDo
// create a function named saveOutput (func, password) check
// create an empty object in the outer function  check
// create a new function called inner one parameter (x)  check
// create a variable result/value = func(password) check
// object[password] = result/value check
// return object check
// return the inner function
function saveOutput(func, magicWord) {
	const object = {};
	function inner(x) {
		if (x != magicWord) {
			let value = func(x);
			object[x] = value;
			return value;
		} else {
			return object;
		}
	}
	return inner;
}
const multiplyBy2 = function(num) {
	return num * 2;
};
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

//Challenge 9
// Create a function cycleIterator that accepts an array, and returns a function.
// The returned function will accept zero arguments. When first invoked, the returned
// function will return the first element of the array. When invoked a second time, the returned
//  function will return the second element of the array, and so forth. After returning the last
//  element of the array, the next invocation will return the first element of the array again, and
//   continue on with the second after that, and so forth.

// create a function called cycleIterator that will have one parameter and that parameter will take
// in an array as an argument.
// it will have a return function inside of it that will have no parameters
// every time the function is called it will return the first of the array
// we will use a counter variable as a backpack and every time the function called
// it will increment throught the array
// when the array reachs the end it will return the first element and restart all over

// How will create
// use counter varible that will increment up every time the return function is invoked
//  if the counter > array.length ==> we're at the end so we need to start over
// return the counter = 1
// when array length is greater counter --> increment up
// array indices array[counter -1]

function cycleIterator(array) {
	let counter = 0;
	function inner() {
		counter++;
		if (counter === array.length + 1) {
			counter = 1;
		}
		return array[counter - 1];
	}
	return inner;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = [ 'Fri', 'Sat', 'Sun' ];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
