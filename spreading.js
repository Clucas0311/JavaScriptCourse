const nums = [ 2, 4, 6, 8 ];

function doubles(double, double1, double2, double3) {
	console.log(double + 1);
	console.log(double1 + 1);
	console.log(double2 + 1);
	console.log(double3 + 1);
}

const doubling = doubles(...nums);
