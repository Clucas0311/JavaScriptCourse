// Wrire a isValidPassword function
// It accepts 2 arguments: password and username
function isValidPassword(password, username) {
	if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
		return false;
	}

	return true;
}

console.log(isValidPassword('su33er99', 'clucas0311'));
