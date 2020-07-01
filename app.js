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
