/* const rage = () => {
	console.log('I HATE EVERYTHING');
};

const repeatNTimes = (action, num) => {
	for (let i = 0; i < num; i++) {
		action();
	}
};

repeatNTimes(rage, 19); */
/*
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
console.log(9); */

// const x = 3;

// function isX1(num) {
// 	const x = 5;
// 	return num === x;
// }
// console.log(isX1(5));

// const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

// numbers.forEach(function(num, idx) {
// 	console.log(idx, num);
// });

// const books = [
// 	{
// 		title: 'Good Omens',
// 		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
// 		rating: 4.25
// 	},
// 	{
// 		title: 'Bone: The Complete edition',
// 		authors: [ 'Jeff Smith' ],
// 		rating: 4.42
// 	},
// 	{
// 		title: 'Americn Gods',
// 		authors: [ 'Neil Gaiman' ],
// 		rating: 4.11
// 	},

// 	{
// 		title: 'A Gentleman in Moscow',
// 		authors: [ 'Amor Towles' ],
// 		rating: 4.36
// 	}
// ];

// // books.forEach(function(book) {
// // 	console.log(book.title.toUpperCase());
// // });

// for (book of books) {
// 	console.log(book.title.toUpperCase());
// }
// const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
// const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

// const capitalWords = words.map((n) => {
// 	return n.toUpperCase().split('').join('.');
// });
// console.log(capitalWords);

//const numDetail = numbers.map(function(n) {
// 	return {
// 		value: n,
// 		isEven: n % 2 === 0
// 	};
// });
// console.log(numDetail);
// const doubles = numbers.map(function(double) {
// 	return double * 2;
// });
// console.log(doubles);
// const square = (n) => {
// 	return n * n;
// };

// const square = (n) => n * n;
// console.log(square(9));

// const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
// const doubles = nums.map((n) => n * 4);
// console.log(doubles);

// // Map into array where it returns odd or even based on each element

// const oddEven = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
// console.log(oddEven);
// let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

// const movie = movies.find((n) => n.includes('Mrs'));
// console.log(movie);

// const nums = [ 34, 35, 67, 54, 109, 102, 32, 9 ];
// // const odds = nums.filter((n) => n % 2 === 1);
// const evens = nums.filter((n) => n % 2 === 0);
// console.log(evens);

// const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];
// const threes = words.every((word) => word.length === 3);
// console.log(threes);

// const nums = [ 3, 4, 5, 6, 7 ];
// const product = nums.reduce((accumulator, currentValue) => accumulator * currentValue);
// console.log(product);

const grades = [ 87, 64, 96, 92, 88, 99, 73, 64 ];

const myGrades = grades.reduce((max, currentVal) => {
	if (currentVal > max) return currentVal;
	return max;
});

console.log(myGrades);
