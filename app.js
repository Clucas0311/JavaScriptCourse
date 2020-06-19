/*const word = 'stressed';
for (i = 0; i < word.length; i++) {
	console.log(word[i]);
} */

/*const word = 'stressed';
for (i = word.length - 1; i >= 0; i--) {
	console.log(word[i]);
} */

const myStudents = [
	{ firstName: 'Zeus', grade: 86 },
	{ firstName: 'Artemis', grade: 97 },
	{ firstName: 'Hera', grade: 72 },
	{ firstName: 'Apollo', grade: 90 }
];
for (i = 0; i < myStudents.length; i++) {
	let students = myStudents[i];
	console.log(`${students.firstName} scored ${students.grade}`);
}
