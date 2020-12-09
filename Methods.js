// Creating methods
const math = {
	numbers: [1, 2, 3, 4, 5],
	add: function (x, y) {
		x + y;
	},
	multiply: function (x, y) {
		return x * y;
	}
};

// Shorthand syntax

const auth = {
	username: 'TommyBot',
	login() {
		console.log('LOGGED YOU IN!');
	},
	logout() {
		console.log('LOGGED YOU OUT!');
	}
};
