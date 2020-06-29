/* Suppose we want to write a function that calculates the sum of all numbers from 1 up to and including n*/
const sumOfNumbers = (n) => {
	total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
};

console.log(sumOfNumbers(10));
