const names = [ 'Alex', 'Bob', 'Johny', 'Atta' ];

//const obj = {};

const newObj = names.reduce((obj, curr, index) => {
	//console.log(obj, curr, index);
	obj[index] = curr;
	return obj;
}, {});

// for (let i = 0; i < names.length; i++) {
// 	obj[i] = names[i];
// }

//console.log(obj);

// const objecto = names.forEach((element, index) => (obj[index] = element));

console.log(newObj);
