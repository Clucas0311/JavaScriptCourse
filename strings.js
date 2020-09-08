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

// console.log(typeof applyToString(42));

// Let us consider the case of wanting to determine where in a string we can find
// a particular substring We can do so using the .indexOf() method for string

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

// Let us consider the case of wanting to get a portion of a string
// We can do so using the .substring() method (note -> there are other
// ways to do this - research the .substr() method):

//console.log('portion of string from before index 2, up to, but not including, index 9:', subString);
// We are going to complete a function that takes in three parameters (string, start, end ->
// where start and end are numerical indexes), and returns a portion of the string from
// before start, up to, but not including, end. Your function should create a subString
// variable and assign it to a call of the substring() method on the string, starting
// from before start, up to, but not including, end, and return the subString variable.
// Below are examples of the code running, assuming that you will have completed the
// described function: applySubString.

function applySubString(string, start, end) {
	// create a subString variable
	let subString;
	// assign it to a portion of the string from before start, up to, but not including end
	subString = string.substring(start, end);
	// return the subString variable
	return subString;
}
// console.log(applySubString('JavaScript'.substring(2, 9)));

function generateHaiku(firstLine, secondLine, thirdLine) {
	// create a haiku variable
	let haiku;
	// assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
	haiku = firstLine + '\n' + secondLine + '\n' + thirdLine;
	// return the haiku variable
	return haiku;
}

// Write a function called "getIndexOf".
// Given a character and a string, "getIndexOf" returns the first position of the
//  given character in the given string.
// Notes:
// Strings are zero indexed, meaning the first character in a string is at position 0.
// When a string contains more than one occurrence of a character, it should return the
// index of its first occurrence. If the character does not exist in the string,
// it should return -1.
// Do not use the native indexOf function in your implementation.
function getIndexOf(char, str) {
	// iterate through the str
	for (let i = 0; i < str.length; i++) {
		// if the str[i] equals char
		if (str[i] === char) {
			// return index
			return i;
		}
	}
	// return -1
	return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
