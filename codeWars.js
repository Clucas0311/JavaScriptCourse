// Define a method hello that returns "Hello, Name!" to a given name, or says Hello,
// World! if name is not given  (or passed as an empty String). Assuming that name is a
// String and it checks for user typos to return a name
// with a first capital letter (Xxxx).

function hello(name) {
	// if name === undefined or an empty string
	if (name === undefined || name === '') {
		// then return 'Hello, World!'
		return 'Hello, World!';
	} // otherwise..
	// return Hello, + name[0].toUpperCase() + slice(1).toLowerCase()!
	return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}
// console.log(hello('jOhn'));

// Your task is to create functionisDivideBy (or is_divide_by) to check if an
// integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
	//if number is divisible by a and b
	if (number % a === 0 && number % b === 0) {
		// return true
		return true;
	}
	// otherwise
	// return false;
	return false;
}
// console.log(isDivideBy(-12, 2, -6)); // true
// console.log(isDivideBy(-12, 2, -5)); // false;

// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:

function arr(N) {
	// create an empty array to push elements into
	const container = [];
	// iterate through the array starting at 0 ending at n
	for (let i = 0; i < N; i++) {
		// push index into container
		container.push(i);
	}
	// return empty array
	return container;
}

// console.log(arr(5));

// You are given an array with positive numbers and a number N.
// You should find the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first
// element has the index 0.

function index(array, n) {
	// if n is greater than or equal to array length
	if (n >= array.length) {
		// then return -1
		return -1;
	} // otherwise
	// return Math.pow(array[n], n)
	return Math.pow(array[n], n);
}
// console.log(index([ 0, 1 ], 0));

// Hey awesome programmer!
// You've got much data to manage and of course you use zero-based and non-negative ID's
// to make each data item unique! Therefore you need a method, which returns the
// smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be
// duplicate IDs, but you don't have to find or remove them!
// Go on and code some pure awesomeness!

function nextId(ids) {
	// create a variable and assign it to 0
	let x = 0;
	// while ids has x as an element run
	while (ids.includes(x)) {
		// increment x until it has a unknown
		x++;
	}
	// return x
	return x;
}
console.log(nextId([ 0, 1, 2, 3, 5 ])); // 4
