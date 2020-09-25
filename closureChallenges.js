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
	return function(y) {
		return x + y;
	};
}
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

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
			console.log(input);
			input = func(x);
		}
		console.log(input);

		return input;
	}
	return inner;
}
// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// // console.log(onceFunc(10)); // => should log 6
// // console.log(onceFunc(9001)); // => should log 6

// Challenge 5
// Write a function after that takes the number of times the callback needs to be
// called before being executed as the first parameter and the callback as the second
// parameter.

// create a function named "after" and it is going to check how many times the callback
// needs to invoked in parameter 1 = count
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
	function inner() {
		return setTimeout(func, wait);
	}
	return inner;
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
		if (x !== magicWord) {
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
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

//Challenge 10
// Create a function defineFirstArg that accepts a function and an argument.
// Also, the function being passed in will accept at least one argument.
// defineFirstArg will return a new function that invokes the passed-in function
//  with the passed-in argument as the passed-in function's first argument.
// Additional arguments needed by the passed-in function will need to be passed
// into the returned function.

// create function called defineFirstArg and its going to have a callback function and a
// argument  as parameters
// the function being retuned  inside this function is going to have one parameter
// this parameter will be the argument placed inside the callback funtion
// so it has to have the argument and x to invoke it

function defineFirstArg(func, arg) {
	function inner(...x) {
		return func(arg, ...x);
	}
	return inner;
}
// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) {
// 	return big - small;
// };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

//Challenge 11
// Create a function dateStamp that accepts a function and returns a function.
//  The returned function will accept however many arguments the passed-in function
//   accepts, and return an object with a date key that contains a timestamp with the
//    time of invocation, and an output key that contains the result from invoking the
//    passed-in function. HINT: You may need to research how to access information on
//    Date objects.

// create a function that is going to be labeled as dateStamp and it will one parameter
// the one parameter will accept a callback as an argument
// its going to have a returned function that will have one parameter
// create an object that key will be a datekey that shows the time the callback was invoked
// and a value key that shows the result of passed in function
//value = callback(x)
// set  new Date() to a variable ===> so I can get the date and time
// object.date = todaysDateString()
// object.output = callback(...args);
// return object

function dateStamp(func) {
	let obj = {};
	function inner(...args) {
		let todaysDate = new Date();
		obj.date = todaysDate.toDateString();
		obj.output = func(...args);
		return obj;
	}
	return inner;
}
/*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// Challenge 12
// Create a function censor that accepts no arguments. censor will return a function that
//  will accept either two strings, or one string. When two strings are given, the returned
//   function will hold onto the two strings as a pair, for future use. When one string is
//   given, the returned function will return the same string, except all instances of first
//    strings (of saved pairs) will be replaced with their corresponding second strings
//    (of those saved pairs).

// create a function named censor with no paramenters
// the return function is going to have parameters ==> because taking in multiple arguments == rest parameters
// if two strings are given return function will hold as pairs: objects hold key:value pairs
// so make the first string key and the second the value {1stString: 2ndString}
// if one string is given
function censor() {
	let obj = {};

	function inner(...args) {
		if (args.length > 1) {
			obj[args[0]] = args[1];
			return obj;
		} else {
			let firstString = Object.keys(obj);
			let secondString = Object.values(obj);
			let newOutput = args[0];
			for (let i = 0; i < firstString.length; i++) {
				newOutput = newOutput.replace(firstString[i], secondString[i]);
			}
			return newOutput;
		}
	}
	return inner;
}
// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// console.log(changeScene('dogs', 'cats'));
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// create function named censor that will have no parameters
// function censor() {
// 	// create a variable and assign to an empty object;
// 	const obj = {};
// 	// return a function that will have two parameters --> string one and string two
// 	function inner(oneString, twoString) {
// 		// IF Both Stings are given
// 		// create an object for the function string1 keys,  string2 values
// 		if (twoString) {
// 			obj[oneString] = twoString;
// 			return;
// 		}
// 		//CONDITIONAL:
// 		//IF one string is given then --> return the same string but replace all occurences of that string.
// 		Object.keys(obj).forEach((key) => {
// 			oneString = oneString.replace(key, obj[key]);
// 		});
// 		return oneString;
// 	}
// 	//return inner function
// 	return inner;
// }
// // Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

// Challenge 13
// There's no such thing as private properties on a JavaScript object! But, maybe there are?
// Implement a function createSecretHolder(secret) which accepts any value as secret and returns
// an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets
// the secret

// the outer of function name: createSecretHolder(take one parameter secret)

// Write a function billerBuilder that takes the name of a state as a parameter.
// billerBuilder should return a new function that takes the price of an item and returns
// the correct final price of the item, given the following:

// if NY, charge 3% for shipping and 4% for sales tax
// if NJ, charge 5% for shipping and 6.625% for sales tax

// create a function named billerBuilder (state)
function billerBuilder(state) {
	// innerFunction (price)
	function inner(price) {
		// if state equals NY
		if (state === 'NY') {
			// return price * 1.03 * 1.04
			return price * 1.03 * 1.04;
			// otherwise if state === NJ
		} else {
			// return price * 1.05 * 1.06625
			return price * 1.05 * 1.06625;
		}
	}
	// return innerFunction
	return inner;
}

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100)); // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder('NJ');
console.log(newJersBiller(100)); // => 111.95625 (100 * 1.05 * 1.06625)
