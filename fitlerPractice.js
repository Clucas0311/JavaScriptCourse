const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 }
];

const filteredItems = items.filter((item) => item.price <= 100);
const mapItems = items.map((item) => item.price * 2);
console.log(mapItems);
console.log(filteredItems);

const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];
const results = votes.reduce((tally, val) => {
	if (tally[val]) {
		tally[val]++;
	} else {
		tally[val] = 1;
	}
	return tally;
}, {});

console.log(results);
