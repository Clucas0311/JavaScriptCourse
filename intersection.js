function intersection(array) {
	return array.reduce((acc, currVal) => {
		console.log(acc, currVal);

		return acc.filter((element) => currVal.includes(element));
	});
}

// function intersection(array) {
// 	return array.reduce((arr, currVal) => [ ...arr, ...curVal ], []);
// }

const arr1 = [ 5, 10, 15, 20 ];
const arr2 = [ 15, 88, 1, 5, 7 ];
const arr3 = [ 1, 10, 15, 5, 20 ];
console.log(intersection([ arr1, arr2, arr3 ])); // should log: [5, 15]
