function countDown(num) {
	if (num <= 0) {
		console.log('All Done!');
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}
countDown(10);

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}

console.log(sumRange(4));

// function factorial(num) {
// 	let total = 1;
// 	for (let i = num; i > 1; i--) {
// 		total += i;
// 	}
// 	return total;
// }
// console.log(factorial(3));

function factorial(num) {
	if (num === 1) return 1;
	return num * factorial(num - 1);
}

console.log(factorial(3));

function collectOddValues(arr) {
	let result = [];
	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

console.log(collectOddValues([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));

function power(base, exponent) {
	if (exponent === 0) return 1;
	return base * power(base, exponent - 1);
}
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}
function additionOfArray(arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr[0] + additionOfArray(arr.slice(1));
}

console.log(productOfArray([ 1, 2, 3 ])); // 6
console.log(productOfArray([ 1, 2, 3, 10 ])); // 60

console.log(additionOfArray([ 1, 2, 3 ])); // 6
console.log(additionOfArray([ 1, 2, 3, 10 ])); // 16
