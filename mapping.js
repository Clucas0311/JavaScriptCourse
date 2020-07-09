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

console.log(doubleNums);
