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
const numbers = [ 1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10 ];
const duplicatesBeGone = numbers.filter((number, index, array) => {
	return index === array.indexOf(number);
});

console.log(duplicatesBeGone);

const users = [ { name: 'Samir', age: 27 }, { name: 'Angela', age: 33 }, { name: 'Beatrice', age: 42 } ];

// const byeSamir = users.filter((key) => key.name !== 'Samir');
// console.log(byeSamir);

// Ages of users 'Samir is age years old'
const ages = users.map((user) => `${user.name} is ${user.age} years old.`);
console.log(ages);
