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

// Removing a Property from an Object
// Let us consider the case of wanting to remove a property from an existing object
// We can do so using the delete operator:

// We are going to complete a function that takes in two parameters,
// an object and an key, removes the property located at the input key from
// the object, and returns the object. Your function should use the delete operator
// to remove the property at the given key from the input object, then return the object.
// Below are examples of the code running, assuming that you will have completed the
// described function: removeAProperty.
function removeAProperty(object, key) {
	// remove the property at the given key from the object
	delete object[key];
	// return the object
	return object;
}
// Checking if a Property is present in an Object
// Let us consider the case of wanting to determine if a property is present
// within an object We can do so by realizing that the value of a property that
// is not present within an object is always undefined Thus, we will access an object
// at the property's key, and check this against undefined
function isPropertyPresent(object, key) {
	// create an isPresent variable
	let isPresent;
	// assign it to a comparison between object's value at key and undefined
	isPresent = object[key] !== undefined;
	// return the isPresent variable
	return isPresent;
}
