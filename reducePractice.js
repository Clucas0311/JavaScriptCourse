// // Construct your own reduce function
// // that accepts an array, a callback, and an
// // initial value and returns a single value.

// //====> resulting into one single function
// // What does reduce do -
// // if you have an intial value set that equal to the number
// // loops through array -- and each element combines into one single item

// // declare a function called reduced - it has three parameters (array, callback, initialvalue)

// // function reduce(array, callback, intialValue) {
// // 	// initial value and current value is equaled to one another
// // 	let accumulator = intialValue;
// // 	for (let i = 0; i < array.length; i++) {
// // 		accumulator = callback(accumulator, array[i]);
// // 	}
// // 	return accumulator;
// // }

// function reduce(array, callback, initialValue) {
// 	let accumulator;
// 	if (initialValue === 'undefined') {
// 		accumulator = array[0];
// 		array = array.slice(1);
// 	} else {
// 		accumulator = initialValue;
// 	}
// 	for (let i = 0; i < array.length; i++) {
// 		accumulator = callback(accumulator, array[i]);
// 	}
// 	return accumulator;
// }
// const orders = [ { amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 } ];
// const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

// const testingReduce = reduce([ 1, 2, 3, 4, 5, 6 ], (total, currentVal) => total + currentVal);
// console.log(testingReduce);

// const sumOfOrders = reduce(orders, (acc, curVal) => acc + curVal.amount, 0);
// console.log(sumOfOrders);

// const minGrade = reduce(grades, (min, currVal) => Math.min(min, currVal));
// console.log(minGrade);
// const maxGrade = grades.reduce((max, currentVal) => Math.max(max, currentVal));
// console.log(maxGrade);
// const users = [ { name: 'Samir', age: 27 }, { name: 'Angela', age: 33 }, { name: 'Beatrice', age: 42 } ];

// const prop = users.reduce((prop, key) => {
// 	prop[key.name] = key.age;
// 	return prop;
// }, {});

// console.log(prop);

// const products = [
// 	{ name: 'hard drive', price: 59.99 },
// 	{ name: 'lighbulbs', price: 2.59 },
// 	{ name: 'paper towels', price: 6.99 },
// 	{ name: 'flatscreen monitor', price: 159.99 },
// 	{ name: 'cable ties', price: 19.99 },
// 	{ name: 'ballpoint pens', price: 4.49 }
// ];

// // Result: { name: 'paper towels', price: 6.99 }

// const under10 = products.filter((cost) => cost.price < 10).reduce((max, currentVal) => {
// 	if (max.price > currentVal.price) {
// 		return max;
// 	}
// 	return currentVal;
// });
// // console.log(under10);

// const over10 = products
// 	.filter((cost) => cost.price > 10)
// 	.reduce((max, currentVal) => max + currentVal.price, 0)
// 	.toFixed(2);
// console.log(over10);

// const purchaseItems = [
// 	{
// 		name: 'apples',
// 		dept: 'groceries',
// 		price: 2.49
// 	},
// 	{
// 		name: 'bread',
// 		dept: 'groceries',
// 		price: 2.99
// 	},
// 	{
// 		name: 'batteries',
// 		dept: 'electronics',
// 		price: 5.8
// 	},
// 	{
// 		name: 'eggs',
// 		dept: 'groceries',
// 		price: 3.99
// 	},
// 	{
// 		name: 't-shirts',
// 		dept: 'apparel',
// 		price: 9.99
// 	}
// ];
// let groceryTotal;

// // groceryTotal should be: 9.47
// // Write your code below

// // first reassign the grocery to the solution we are trying to create
// // filter the purchase items array so that it creates a new array with just dept "groceries"
// // reduce the next array - create an intial value starting at zero - acc/totalval, currentVal.price => add these up and return the result

// groceryTotal = purchaseItems
// 	.filter((depart) => depart.dept === 'groceries')
// 	.reduce((total, currentVal) => total + currentVal.price, 0)
// 	.toFixed(2);

// //console.log(groceryTotal);

// const users = [
// 	{
// 		name: 'Samir',
// 		age: 27,
// 		favoriteBooks: [ { title: 'The Iliad' }, { title: 'The Brothers Karamazov' } ]
// 	},
// 	{
// 		name: 'Angela',
// 		age: 33,
// 		favoriteBooks: [
// 			{ title: 'Tenth of December' },
// 			{ title: 'Cloud Atlas' },
// 			{ title: 'One Hundred Years of Solitude' }
// 		]
// 	},
// 	{
// 		name: 'Beatrice',
// 		age: 42,
// 		favoriteBooks: [ { title: 'Candide' } ]
// 	}
// ];

// const book = users
// 	.map((favBooks) => favBooks.favoriteBooks.map((bookTitle) => bookTitle.title))
// 	.reduce((arr, titles) => [ ...arr, ...titles ], []);

// // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
// console.log(book);

const customerNames = [
	[ 'John', 'Sandy', 'Tyrone', 'Elizabeth', 'Penny' ],
	[ 'Barry', 'Wanda', 'Jamal', 'Hayden' ],
	[ 'Portia', 'Pam', 'Philip' ]
];
let flattenedCustomerNames;

// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// Write your code below

flattenedCustomerNames = customerNames.reduce((arr, names) => [ ...arr, ...names ], []);

console.log(flattenedCustomerNames);

const customers = [
	{
		name: 'Tyrone',
		personal: {
			age: 33,
			hobbies: [ 'Bicycling', 'Camping' ]
		}
	},
	{
		name: 'Elizabeth',
		personal: {
			age: 25,
			hobbies: [ 'Guitar', 'Reading', 'Gardening' ]
		}
	},
	{
		name: 'Penny',
		personal: {
			age: 36,
			hobbies: [ 'Comics', 'Chess', 'Legos' ]
		}
	}
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below

hobbies = customers
	.map((user) => user.personal.hobbies.map((hobby) => hobby))
	.reduce((arr, activities) => arr.concat(activities), []);
console.log(hobbies);
