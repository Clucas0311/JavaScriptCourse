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
