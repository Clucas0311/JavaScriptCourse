let secretMessage = [
	'Learning',
	'is',
	'not',
	'about',
	'what',
	'you',
	'get',
	'easily',
	'the',
	'first',
	'time,',
	'it',
	'is',
	'about',
	'what',
	'you',
	'can',
	'figure',
	'out.',
	'-2015,',
	'Chris',
	'Pine,',
	'Learn',
	'JavaScript'
];

secretMessage.pop();

//console.log(secretMessage.length)

secretMessage.push('to', 'Program');
//console.log(secretMessage.length)

secretMessage[7] = 'right';

secretMessage.shift();
//console.log(secretMessage)
secretMessage.unshift('Programming');
//console.log(secretMessage)

secretMessage.splice(6, 11, 'know');
console.log(secretMessage);
console.log(secretMessage.join(' '));
