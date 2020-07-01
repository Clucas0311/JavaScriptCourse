const prices = [ 6.75, 3.1, 4.0, 8.12 ];
total = 0;

prices.forEach((price) => {
	total += price;
});

console.log(total);

const names = [ 'Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin' ];
emptyArray = [];

names.forEach((name) => {
	if (name.indexOf('S') === 0) {
		emptyArray.push(name);
	}
});

console.log(emptyArray);

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below

numbers.forEach((number, index) => {
	times10.push(number * 10);
});

console.log(times10);
