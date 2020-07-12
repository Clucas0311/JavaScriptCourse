const array = [ 2, 2, 3, 4, 5, 6, 7, 6, 8, 9 ];

const newArray = array.filter((item, index) => {
	console.log(item, index, array.indexOf(item), array.indexOf(item) === index);
	return array.indexOf(item) === index;
});
console.log(newArray);

const names = [ 'Alex', 'Bob', 'Johny', 'Atta' ];

// convert array to th object
const obj = { ...names };

// print object
console.log(obj);
