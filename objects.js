// We are going to complete a function that takes no parameters,
// and returns a newly created object. Your function should create a
// variable and assign it to a new object, then return that variable.
//  Below is an example of the code running, assuming that you will have
//  completed the described function: createObject
function createObject() {
	// create a result variable,
	let result;
	// assign it to a new object
	result = {};
	// return the result variable
	return result;
}
// We are going to complete a function that takes two parameters, an object and a
// string key, and returns the value for a property in the object located at the
// string key. Your function should create a variable and assign it to an expression
// which accesses the value of the property located at the string key, then return
// that variable. Below is an example of the code running, assuming that you will
// have completed the described function: accessAProperty.
function accessAProperty(object, key) {
	// create a result variable,
	let result;
	// assign it to an expression that accesses the property in the object located at the key
	result = object[key];
	// return the result variable
	return result;
}

// We are going to complete a function that takes three parameters,
// an object, a string key, and a newValue, and returns the object after
// performing a reassignment. Your function should reassign the property's
// value within the object, located at the string key, to the newValue parameter,
// and should then return the newly changed object. Below is an example of the code
// running, assuming that you will have completed the described function: reassignAProperty.

function reassignAProperty(object, key, newValue) {
	// reassign the property's value in the object, located at the key, to the newValue paramete
	object[key] = newValue;
	// return the input object
	return object;
}
