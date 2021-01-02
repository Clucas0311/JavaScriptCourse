let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	'Active Mission': true,
	homePlanet: 'Earth',
	numCrew: 5
};

// let propName = 'Active Mission';

// // Write your code below

// const isActive = spaceship['Active Mission'];
// console.log(isActive);
// console.log(spaceship[propName]);

// let spaceship = {
// 	'Fuel Type': 'Turbo Fuel',
// 	homePlanet: 'Earth',
// 	color: 'silver',
// 	'Secret Mission': 'Discover life outside of Earth.'
// };

// // Write your code below
// console.log((spaceship.color = 'glorious gold'));

// spaceship.numEngines = 9;
// console.log(spaceship);

// delete spaceship['Secret Mission'];

function iterateOverObject(obj) {
	for (let key in obj) {
		console.log(obj[key]);
	}
}
// iterateOverObject(spaceship);

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
	[role]: person,
	[role2]: person2
};
// console.log(team);

const math = {
	number: [1, 2, 3, 4, 5],
	add: function (x, y) {
		return x + y;
	},
	subtract: function (x, y) {
		return x - y;
	},
	multiply: function (x, y) {
		return x * y;
	},
	divisor: function (x, y) {
		return x / y;
	}
};

// console.log(math.add(5, 5));
// console.log(math.subtract(10, 5));
// console.log(math.number);
// console.log(math.multiply(2, 4));

let transactions = [
	{
		name: 'apples',
		amount: 5
	},
	{
		name: 'kleenex',
		amount: 2
	},
	{
		name: 'knitting supplies',
		amount: 10
	}
];

// YOUR CODE BELOW
// create a function named lastFridayNight takes in an array argument
function lastFridayNight(arr) {
	// create a sum variable assign the value of 0
	let sum = 0;
	// iterate through the array to access the object
	for (let i = 0; i < arr.length; i++) {
		// grab the object element
		let obj = arr[i];
		// iterate through the object to get its key
		sum += obj['amount'];
	}
	// return sum
	return sum;
}

console.log(lastFridayNight(transactions));
