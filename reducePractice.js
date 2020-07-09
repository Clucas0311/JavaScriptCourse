// Construct your own reduce function
// that accepts an array, a callback, and an
// initial value and returns a single value.

//====> resulting into one single function
// What does reduce do -
// if you have an intial value set that equal to the number
// loops through array -- and each element combines into one single item

// declare a function called reduced - it has three parameters (array, callback, initialvalue)

// function reduce(array, callback, intialValue) {
// 	// initial value and current value is equaled to one another
// 	let accumulator = intialValue;
// 	for (let i = 0; i < array.length; i++) {
// 		accumulator = callback(accumulator, array[i]);
// 	}
// 	return accumulator;
// }

function reduce(array, callback, initialValue) {
	let accumulator;
	if (initialValue === undefined) {
		accumulator = array[0];
		array = array.slice(1);
	} else {
		accumulator = initialValue;
	}
	for (let i = 0; i < array.length; i++) {
		accumulator = callback(accumulator, array[i]);
	}
	return accumulator;
}
const orders = [ { amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 } ];
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const testingReduce = reduce([ 1, 2, 3, 4, 5, 6 ], (total, currentVal) => total + currentVal);
console.log(testingReduce);

const sumOfOrders = reduce(orders, (acc, curVal) => acc + curVal.amount, 0);
console.log(sumOfOrders);

const minGrade = reduce(grades, (min, currVal) => Math.min(min, currVal));
console.log(minGrade);

const users = [ { name: 'Samir', age: 27 }, { name: 'Angela', age: 33 }, { name: 'Beatrice', age: 42 } ];

const prop = users.reduce((prop, key) => {
	prop[key.name] = key.age;
	return prop;
}, {});

console.log(prop);
