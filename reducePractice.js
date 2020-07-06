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
const animals = [ 'dog', 'cat', 'tree frog' ];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
