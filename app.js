// const prices = [ 6.75, 3.1, 4.0, 8.12 ];
// total = 0;

// prices.forEach((price) => {
// 	total += price;
// });

// console.log(total);

// const names = [ 'Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin' ];
// const emptyArray = names.filter((name) => name.indexOf('S') === 0);

// console.log(emptyArray);

// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let times10 = [];

// // times10 should be: [10,20,30,40,50,60,70,80,90,100]
// // Write your code below

// numbers.forEach((number, index) => {
// 	times10.push(number * 10);
// });

// console.log(times10);

// const names = [ 'Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin' ];
// const startS = (name) => name.indexOf('S') === 0;
// const namesS = names.filter(startS);
// console.log(namesS);

// const years = [ 1989, 2015, 2000, 1999, 2013, 1973, 2012 ];
// let century20;

// // century20 should be: [1989, 2000, 1999, 1973]
// // Write your code below

// century20 = years.filter((year) => year <= 2000);
// console.log(century20);

// const fruits = [ 'apple', 'pear', 'cherry' ];

// const capitalizedFruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log(capitalizedFruits);

// const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
// let abbreviatedDays;

// // abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// // Write your code below

// abbreviatedDays = daysOfWeek.map((days) => days.slice(0, 3));
// console.log(abbreviatedDays);

const prices = [ 6.75, 3.1, 4.0, 8.12 ]; // Total: 21.97

const total = prices.reduce((acc, cur) => acc + cur, 0);
console.log(total);

const names = [ 'Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony' ];
// return a count of the names that begin with the letter G using reduce

const startWG = names.reduce((count, name) => {
	if (name[0] === 'G') {
		return count + 1;
	}
	return count;
}, 0);
console.log(startWG);

const phoneNumbers = [
	'(503) 123-4567',
	'(646) 123-4567',
	'(503) 987-6543',
	'(503) 234-5678',
	'(212) 123-4567',
	'(416) 123-4567'
];

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((count, number) => {
	if (number.indexOf('(503)') === 0) {
		return count + 1;
	}
	return count;
}, 0);

console.log(numberOf503);
