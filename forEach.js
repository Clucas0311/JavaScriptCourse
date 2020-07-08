function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

forEach([ 1, 2, 3, 4 ], function(num) {
	console.log(num * 2);
});

const arr = [ 1, 2, 3, 4 ];
const emptyArray = [];
const iterable = arr.forEach((nums) => console.log(nums * 2));

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36
	}
];
const bookie = [];
forEach(books, function(book) {
	bookie.push(book.title);
});
console.log(bookie);
