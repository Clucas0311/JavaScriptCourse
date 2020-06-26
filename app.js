/* const rage = () => {
	console.log('I HATE EVERYTHING');
};

const repeatNTimes = (action, num) => {
	for (let i = 0; i < num; i++) {
		action();
	}
};

repeatNTimes(rage, 19); */

function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}
const triple = multiplyBy(4);
console.log(triple(4));

const double = multiplyBy(6);
console.log(double(2));

function subtractBy(num) {
	return function(x) {
		return x - num;
	};
}
const minus = subtractBy(7);
console.log(minus(10));

function divideBy(num) {
	return function(x) {
		return x / num;
	};
}

const divide = divideBy(81);
console.log(9);
