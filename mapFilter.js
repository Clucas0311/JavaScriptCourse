const arr = [ 1, 2, 3 ];

const smallerArr = arr.filter((num) => num !== 2).map((numb) => numb + 1);

console.log(smallerArr);

const years = [ 1989, 2015, 2000, 1999, 2013, 1973, 2012 ];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

// filter through array to get the years of the 21st century
// map - create a new array with strings and AD.

displayYears = years.filter((year) => year >= 2001).map((element) => `${element} A.D.`);

console.log(displayYears);

const userNames = [ 'Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean' ];

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const newObj = userNames.filter((user) => user.indexOf('S') === 0).map((name) => {
	return { name: name };
});

console.log(newObj);

const users = [
	{ name: 'Samir', age: 27 },
	{ name: 'Angela', age: 33 },
	{ name: 'Beatrice', age: 42 },
	{ name: 'Shaniqua', age: 30 },
	{ name: 'Marvin', age: 23 },
	{ name: 'Sean', age: 47 }
];

// filter and map to create an array with name strings with users thrity years and over

const dirty30s = users.filter((user) => user.age >= 30).map((thirties) => `${thirties.name}`);
console.log(dirty30s);

const todos = [
	{
		todo: 'Buy apples',
		done: false
	},
	{
		todo: 'Wash car',
		done: true
	},
	{
		todo: 'Write web app',
		done: false
	},
	{
		todo: 'Read MDN page on JavaScript arrays',
		done: true
	},
	{
		todo: 'Call mom',
		done: false
	}
];
let unfinishedTasks;

// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
// Write your code below

unfinishedTasks = todos.filter((finished) => finished.done !== true).map((task) => task.todo);
console.log(unfinishedTasks);
