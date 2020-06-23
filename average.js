// Write a function to find the average value in an array of numbers

function avg(arr) {
	let total = 0;
	for (let sum of arr) {
		total += sum;
	}
	let res = total / arr.length;
	return res;
}

console.log(avg([ 0, 50 ]));
console.log(avg([ 75, 76, 80, 95, 100 ]));
