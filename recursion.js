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
