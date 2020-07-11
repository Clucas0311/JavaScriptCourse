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

const flatMovies = movies.reduce((arr, innerMovies) => [ ...arr, ...innerMovies ], []);
console.log(flatMovies);
