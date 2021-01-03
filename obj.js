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
		// grab the element which is each object
		let obj = arr[i];
		// add sum and the object amount togeter
		sum += obj['amount'];
	}
	// return sum
	return sum;
}

// console.log(lastFridayNight(transactions));

// create a function compareObjects takes in two objects as arguments
function compareObjects(obj1, obj2) {
	// // iterate through the first object to get its key
	// for (let key in obj1) {
	// 	// if the object1[key] doesn't eqaul object[key]
	// 	if (obj1[key] !== obj2[key]) {
	// 		// return false
	// 		return false;
	// 	}
	// }

	// // iterate through the second object and get its key
	// for (let key in obj2) {
	// 	// if the object2[key] doesn't equal object1[key]
	// 	if (obj2[key] !== obj1[key]) {
	// 		// return false
	// 		return false;
	// 	}
	// }
	// // if both aren't false return true
	// return true;

	// grab the keys from both obj1 and obj2
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
	// if the object1keys array is not the same length as the object2Keys array
	if (obj1Keys.length !== obj2Keys.length) {
		// return false
		return false;
	}
	// iterate through the obj1Key array to get each element
	for (let i = 0; i < obj1Keys.length; i++) {
		// if the element doesn't equal the the element in obj2key array
		if (obj1Keys[i] !== obj2Keys[i]) {
			// return false
			return false;
		}
	}
	// otherwise return true
	return true;
}
// console.log(compareObjects({ a: 1 }, { a: 1, b: 2 })); // false
// console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 })); //true

let letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];
let leetChars = [
	'@',
	'8',
	'(',
	'|)',
	'3',
	'ph',
	'g',
	'#',
	'l',
	'_|',
	'|<',
	'1',
	"|'|'|",
	'//',
	'0',
	'|D',
	'(,)',
	'|2',
	'5',
	'+',
	'|_|',
	'|/',
	"|/|/'",
	'><',
	'j',
	'2'
];

// create a function named letterTranslator takes in one argument a str
function leetTranslator(str) {
	// create an empty object to store the values
	const obj = {};
	// iterate through the letters array
	for (let i = 0; i < letters.length; i++) {
		// grab the letters element and store that as a key
		let key = letters[i];
		// grab the leetChars element and store that as the value
		let value = leetChars[i];
		// create the new obj with letters as key and letterChars as a value
		obj[key] = value;
	}
	// create an empty string to concat the translated string
	let translated = '';
	// iterate through the string to get the element
	for (let i = 0; i < str.length; i++) {
		// grab the element of the str and make it lowercase
		let element = str[i];
		// concat the new String with the translated string
		translated += obj[element];
	}
	// return the string
	return translated;
}

// console.log(leetTranslator('fullstack')); //ph|_|115+@(|<

function frequencyAnalysis(str) {
	const charMap = {};
	for (let letter of str) {
		charMap[letter] = charMap[letter] + 1 || 1;
	}
	return charMap;
}
// console.log(frequencyAnalysis('i like pumpkins'));
// Write a function petSounds that takes an animal name and a country name.
// Using the globally-defined animalNoises array, petSounds should return a sentence
// that explains which sound the animal makes in the given country.
let animalNoises = [
	{
		dog: {
			America: 'Woof! Woof!',
			Germany: 'Wau Wau!',
			England: 'Bow wow!',
			Uruguay: 'Jua jua!',
			Afrikaans: 'Blaf!',
			Korea: 'Mong mong!',
			Iceland: 'Voff voff!',
			Albania: 'Ham!',
			Algeria: 'Ouaf ouaf!'
		}
	},
	{
		cat: {
			America: 'Meow',
			Germany: 'Miauw!',
			England: 'mew mew',
			Uruguay: 'Miau Miau!',
			Afrikaans: 'Purr',
			Korea: 'Nyaong!',
			Iceland: 'Kurnau!',
			Albania: 'Miau',
			Algeria: 'Miaou!'
		}
	},
	{
		chicken: {
			America: 'Cluck cluck',
			Germany: 'tock tock tock',
			England: 'Cluck Cluck',
			Uruguay: 'gut gut gdak',
			Afrikaans: 'kukeleku',
			Korea: 'ko-ko-ko',
			Iceland: 'Chuck-chuck!',
			Albania: 'Kotkot',
			Algeria: 'Cotcotcodet'
		}
	}
];

// create a function named petSounds that takes in two arguments animal and country
function petSounds(animal, country) {
	// iterate through the animal noises array to get the animals key
	for (let i = 0; i < animalNoises.length; i++) {
		// grab the animal key store in animalObj
		let animalObj = animalNoises[i];
		// check to see if the animal key is found in animalObj
		if (animal in animalObj) {
			// if it is then store that in the a new variable country sounds to access the sounds
			let countrySounds = animalObj[animal];
			// create a variable called sound and assign the value to countrySounds Obj the key being country
			let sound = countrySounds[country];
			animal = animal[0].toUpperCase() + animal.slice(1) + 's';
			// return the final string, concating all of the pieces together
			return animal + ' in ' + country + ' say ' + sound;
		}
	}
}

console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!)
