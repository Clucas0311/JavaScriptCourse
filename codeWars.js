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
	// if number is divisible by a and b
	if (number % a === 0 && number % b === 0) {
		// return true
		return true;
	}
	// otherwise
	// return false;
	return false;
}
console.log(isDivideBy(-12, 2, -6)); // true
console.log(isDivideBy(-12, 2, -5)); // false;
