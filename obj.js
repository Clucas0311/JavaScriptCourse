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
console.log(team);
