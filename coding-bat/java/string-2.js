/**
 * doubleChar
 * Given a string, return a string where for every char in the original,
 * there are two chars.
 */

// Solution 1
function doubleChar(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    newStr += str[i].repeat(2);
  }
  return newStr;
}

// Solution 2
function doubleChar(str) {
  return str.split('').map(x => x.repeat(2)).join('');
}

console.log(doubleChar('The')); // → "TThhee"
console.log(doubleChar('AAbb')); // → "AAAAbbbb"
console.log(doubleChar('Hi-There')); // → "HHii--TThheerree"

/**
 * countHi
 * Return the number of times that the string "hi" appears anywhere in the given
 * string.
 */

function countHi(str) {
  const strMatch = str.match(/hi/ig);
  return strMatch ? strMatch.length : 0;
}

console.log(countHi('abc hi ho')); // → 1
console.log(countHi('ABChi hi')); // → 2
console.log(countHi('hihi')); // → 2

/**
 * catDog
 * Return true if the string "cat" and "dog" appear the same number of times in
 * the given string.
 */

function catDog(str) {
  const catMatch = str.match(/cat/g);
  const dogMatch = str.match(/dog/g);
  return (catMatch ? catMatch.length : 0) === (dogMatch ? dogMatch.length : 0);
}

console.log(catDog('catdog')); // → true
console.log(catDog('catcat')); // → false
console.log(catDog('1cat1cadodog')); // → true

/**
 * countCode
 * Return the number of times that the string "code" appears anywhere in the
 * given string, except we'll accept any letter for the 'd', so "cope" and
 * "cooe" count.
 */

function countCode(str) {
  const codeMatch = str.match(/co.e/g);
  return codeMatch ? codeMatch.length : 0;
}

console.log(countCode('aaacodebbb')); // → 1
console.log(countCode('codexxcode')); // → 2
console.log(countCode('cozexxcope')); // → 2


/**
 * endOther
 * Given two strings, return true if either of the strings appears at the very
 * end of the other string, ignoring upper/lower case differences (in other
 * words, the computation should not be "case sensitive").
 */

function endOther(strA, strB) {
  const lowerA = strA.toLowerCase();
  const lowerB = strB.toLowerCase();
  return lowerA.slice(-lowerB.length) === lowerB || lowerB.slice(-lowerA.length) === lowerA;
}

console.log(endOther('Hiabc', 'abc')); // → true
console.log(endOther('AbC', 'HiaBc')); // → true
console.log(endOther('abc', 'abXabc')); // → true

/**
 * xyzThere
 * Return true if the given string contains an appearance of "xyz" where the xyz
 * is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does
 * not.
 */

function xyzThere(str) {
  if (str.length >= 3 && str.substring(0, 3) === 'xyz') {
    return true;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i - 1) !== '.' && str.substring(i, i + 3) === 'xyz') {
      return true;
    }
  }
  return false;
}

console.log(xyzThere('abcxyz')); // → true
console.log(xyzThere('abc.xyz')); // → false
console.log(xyzThere('xyz.abc')); // → true
