function songDecoder(song) {
	// use replace remove wub and replace it with a closed string
	decoded = song.replace(/WUB+/g, ' ').trim();
	return decoded;
}

console.log(songDecoder('AWUBBWUBC'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('WUBAWUBBWUBCWUB'));
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
