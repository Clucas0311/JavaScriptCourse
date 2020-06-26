const doubleArr = (arr) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let double = arr[i] * 2;
		result.push(double);
	}
	return result;
};

console.log(doubleArr([ 1, 3, 5 ]));
