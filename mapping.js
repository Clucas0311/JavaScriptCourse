const array = [ 1, 3, 5, 7, 9 ];

const newArray = array.map((num) => num * 3);

console.log(newArray);

function map(array, callback) {
	result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}
	return result;
}

const doubleNums = map([ 20, 21, 22, 23, 24, 25, 26, 27 ], function(numbs) {
	return numbs * 3;
});

console.log(doubleNums);
