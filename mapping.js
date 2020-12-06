const array = [ 1, 3, 5, 7, 9 ];

const newArray = array.map((num) => num * 3);

//console.log(newArray);

const forEach = (array, callback) => {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
};

const map = (array, callback) => {
	const newArray = [];
	forEach(array, (element) => newArray.push(callback(element)));
	return newArray;
};

const doubleNums = map([ 20, 21, 22, 23, 24, 25, 26, 27 ], (numbs) => numbs * 2);

const divideBy2 = map([ 12, 24, 36, 8, 20, 4 ], (number) => number / 2);
console.log(divideBy2);
console.log(doubleNums);

const authors = [
	{ firstName: 'Beatrix', lastName: 'Potter' },
	{ firstName: 'Ann', lastName: 'Martin' },
	{ firstName: 'Beverly', lastName: 'Cleary' },
	{ firstName: 'Roald', lastName: 'Dahl' },
	{ firstName: 'Lewis', lastName: 'Carroll' }
];
let fullAuthorNames;

// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// Write your code below

fullAuthorNames = authors.map((fullName) => `${fullName.firstName} ${fullName.lastName}`);
console.log(fullAuthorNames);
