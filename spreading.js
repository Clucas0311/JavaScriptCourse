const nums = [ 2, 4, 6, 8 ];

function doubles(double, double1, double2, double3) {
	console.log(double + 1);
	console.log(double1 + 1);
	console.log(double2 + 1);
	console.log(double3 + 1);
}

const doubling = doubles(...nums);

const cephalopods = [ 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish' ];

const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];

const cnidaria = [ 'fire coral', 'moon jelly' ];

const mollusca = [ ...cephalopods, ...cnidaria ];

console.log(mollusca);

const movies = [
	[ 'The Day the Earth Stood Still', 'Superman', 'Ghostbusters' ],
	[ 'Finding Dory' ],
	[ 'Jaws', 'On the Waterfront' ]
];

const flatMovies = movies.reduce((arr, innerMovies) => {
	console.log(arr, innerMovies);
	return [ ...arr, ...innerMovies ];
}, []);
console.log(flatMovies);

// const arr1 = [ 5, 10, 15 ];
// const arr2 = [ 15, 88, 1, 5, 7 ];
// const arr3 = [ 100, 15, 10, 1, 5 ];
// console.log(union([ arr1, arr2, arr3 ])); // should log: [5, 10, 15, 88, 1, 7, 100]
// function union(array) {
// 	let newArray = [];
// 	newArray.push(array.reduce((arr, curVal) => [ ...arr, ...curVal ], []));
// 	newArray.filter((element, item) => newArray.indexOf(element) === item);
// 	return newArray;
// }
