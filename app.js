function songDecoder(song) {
	// use replace remove wub and replace it with a closed string
	return song.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecoder('AWUBBWUBC'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('WUBAWUBBWUBCWUB'));
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
