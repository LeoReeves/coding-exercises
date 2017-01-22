// Title Case a Sentence

// Solution 1
function titleCase(str) {
  const strArr = str.toLowerCase().split(' ');
  const results = [];
  for (let i = 0; i < strArr.length; i += 1) {
    const letter = strArr[i].charAt(0).toUpperCase();
    results.push(letter + str[i].slice(1));
  }
  return results.join(' ');
}

titleCase('sHoRt AnD sToUt'); // → 'Short and Stout'


// Solution 2 based on this http://stackoverflow.com/a/4879879
function titleCase2(str) {
  return str.toLowerCase().replace(/(^| )(\w)/g, firstChar => firstChar.toUpperCase());
}

titleCase2('sHoRt AnD sToUt'); // → 'Short and Stout'

