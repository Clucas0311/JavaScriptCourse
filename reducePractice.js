const scores = [ 90, 30, 20, 75, 85, 95, 0, 55, 60, 40 ];

const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);

const myArray = [ 1, 2, 3 ];

const result = myArray.map((arr) => arr * 2);

console.log(result);

const pluralize = (arr) => {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		newArray.push(arr[i] + 's');
	}
	return newArray;
};
// Uncomment these to check your work!
// const animals = [ 'dog', 'cat', 'tree frog' ];
// console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

// const subtractTwo = map((num) => num * 2);
// // Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([ 3, 4, 5 ], subtractTwo)); // should log: [ 1, 2, 3 ]

// forEach function with two parameters
const forEach = (array, callback) => {
	for (let element of array) {
		// runs a callback on each element
		callback(element);
	}
};
const map = (nums, callback) => {
	let result = [];
	forEach(nums, function(element) {
		result.push(callback(element));
	});
	return result;
};

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach([ 'a', 'b', 'c' ], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([ 3, 4, 5 ], (n) => n - 2)); // should log: [1, 2, 3]
