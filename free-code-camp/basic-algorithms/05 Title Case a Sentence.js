// Returns a provided string with the first letter of each word capitalized. 

// Solution 1
function titleCase(str) {
	str = str.toLowerCase().split(' ');
	results = [];
	for (var i = 0; i < str.length; i++) {
		var letter = str[i].charAt(0).toUpperCase();
		results.push(letter + str[i].slice(1));
	}
	return results.join(' ');
}

// Solution 2 based on this http://stackoverflow.com/a/4879879
function titleCase(str) {
  str = str.toLowerCase();
  return str.replace(/(^| )(\w)/g, function(firstChar) {
    return firstChar.toUpperCase();
  });
}

titleCase("sHoRt AnD sToUt");

// Result = 'Short and Stout' 
