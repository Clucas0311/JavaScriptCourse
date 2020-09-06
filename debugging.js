// We are going to debug a function that takes in an object, and a target value.
// This function will iterate over the object's values, and attempt to locate the
// target value. If the value is found, the function should return the name of the
// key where the value in question is located, and if not, the function should return
// -1. Below is an example of the code running, assuming that you will have debugged
// the described function: keyOfObjectValue:

function keyOfObjectValue(object, target) {
	// iterate over the object to get the values
	for (var key in object) {
		// if the objects value equals the target
		if (object[key] === target) {
			// return that values key
			return key;
			// the problem - if the value equals the target the iteration will stop
			// so you don't place the next return inside the loop
			// you will need to exit array then return
			// } else {
			// 	return -1;
			// }
		}
	}
	// otherwise return -1
	return -1;
}

var result1 = keyOfObjectValue({ cucumbers: 14, carrots: 20, peas: 400 }, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({ name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham' }, 'Superman');
console.log('should log -1:', result2);
