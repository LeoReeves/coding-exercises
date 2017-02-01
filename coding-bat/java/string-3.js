/**
 * countYZ
 * Given a string, count the number of words ending in 'y' or 'z' -- so the 'y'
 * in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case
 * sensitive). We'll say that a y or z is at the end of a word if there is not
 * an alphabetic letter immediately following it.
 */

function countYZ(str) {
  const strSplit = str.split(' ');
  const arr = [];
  for (let i = 0; i < strSplit.length; i += 1) {
    arr.push(strSplit[i].slice(-1));
  }
  return arr.length;
}

console.log(countYZ('fez day')); // → 2
console.log(countYZ('day fez')); // → 2
console.log(countYZ('day fyyyz')); // → 2

/**
 * withoutString
 * Given two strings, base and remove, return a version of the base string where
 * all instances of the remove string have been removed (not case sensitive).
 * You may assume that the remove string is length 1 or more. Remove only
 * non-overlapping instances, so with "xxx" removing "xx" leaves "x".
 */

// Solution 1
function withoutString(base, remove) {
  const regRemove = new RegExp(remove, 'g');
  return base.replace(regRemove, '');
}

// Solution 2
function withoutString(base, remove) {
  let str = ''; 
  for (let i = 0; i < base.length; i += 1) {
    if (remove.indexOf(base[i]) === -1) {
      str += base[i];
    }
  }
  return str;
}

console.log(withoutString('Hello there', 'llo')); // → "He there"
console.log(withoutString('Hello there', 'e')); // → "Hllo thr"
console.log(withoutString('Hello there', 'x')); // → "Hello there"

/**
 * equalIsNot
 * Given a string, return true if the number of appearances of "is" anywhere in
 * the string is equal to the number of appearances of "not" anywhere in the
 * string (case sensitive).
 */

// Solution 1
function equalIsNot(str) {
  const strLower = str.toLowerCase();
  return strLower.split('is').length - 1 === strLower.split('not').length - 1;
}

// Solution 2
function equalIsNot(str) {
  const strLower = str.toLowerCase();
  return strLower.match(/is/g).length === strLower.match(/not/g).length;
}

console.log(equalIsNot('This is not')); // → false
console.log(equalIsNot('This is notnot')); // → true
console.log(equalIsNot('noisxxnotyynotxisi')); // → true
