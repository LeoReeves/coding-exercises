// Returns the length of the longest word in a string.

function findLongestWord(str) {
	str = str.split(' ');
	var longest = str.sort(function(a, b) {
		return b.length - a.length;
	})[0];
	return longest.length; // change to 'return longest;' to just return longest word. 
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// Result = 6
