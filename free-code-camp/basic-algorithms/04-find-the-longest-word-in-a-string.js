// Find the Longest Word in a String

function findLongestWord(str) {
  const strArr = str.split(' ');
  const longest = strArr.sort((a, b) => b.length - a.length)[0];
  return longest.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog'); // → 6
