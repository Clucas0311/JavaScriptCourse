// We are going to complete a function that takes in one parameter,
// and returns a string version of that parameter. Your function should create a
// stringVersion variable and assign it to a call of the toString() method on the
// input parameter, and return the stringVersion variable. Below are examples of the
// code running, assuming that you will have completed the described function:
//  applyToString.
function applyToString(param) {
	// create a stringVersion variable
	let stringVersion;
	// assign it to the string version of the input param
	stringVersion = param.toString();
	// return the stringVersion variable
	return stringVersion;
}

console.log(typeof applyToString(42));

// Let us consider the case of wanting to determine where in a string we can find
// a particular substringWe can do so using the .indexOf() method for string

// We are going to complete a function that takes in two parameters (string, subString),
//  and returns the index of the string where the subString can be found.
//  Your function should create an index variable and assign it to a call of the
//  indexOf() method on the string, and passing subString as an argument, and return
//  the index variable. Below are examples of the code running, assuming that you will
//  have completed the described function: applyIndexOf.

function applyIndexOf(string, subString) {
	// create an index variable
	let index;
	// assign it to the index inside of string where subString can first be found
	index = string.indexOf(subString);
	// return the index variable
	return index;
}
