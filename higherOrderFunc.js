// Define a function 'finderFunction' that takes an array and a callback.
// Pass each element from the array into the callback. If the callback returns true,
// return the index of the current element. If the callback never returns true, return -1;

function finderFunction(array, callback) {
	// loop through the array to get the elements
	for (let i = 0; i < array.length; i++) {
		// if when the callback is invokes with the element is true
		if (callback(array[i]) === true) {
			// return index
			return i;
		}
	}
	// otherwise return -1
	return -1;
}
let numbers = [ 1, 3, 5, 64, 7, 12 ];
let odds = [ 9, 13, 15, 17 ];

function isEven(num) {
	return !(num % 2);
}
console.log(finderFunction(numbers, isEven)); // 3
console.log(finderFunction(odds, isEven)); // -1
