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

console.log(doubleChar('The')); // → 'TThhee'
console.log(doubleChar('AAbb')); // → 'AAAAbbbb'
console.log(doubleChar('Hi-There')); // → 'HHii--TThheerree'

/**
 * countHi
 * Return the number of times that the string 'hi' appears anywhere in the given
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
 * Return true if the string 'cat' and 'dog' appear the same number of times in
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
 * Return the number of times that the string 'code' appears anywhere in the
 * given string, except we'll accept any letter for the 'd', so 'cope' and
 * 'cooe' count.
 */

function countCode(str) {
  const codeMatch = str.match(/co.e/g);
  return codeMatch ? codeMatch.length : 0;
}

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
 * words, the computation should not be 'case sensitive').
 */

// Solution 1
function endOther(strA, strB) {
  const lowerA = strA.toLowerCase();
  const lowerB = strB.toLowerCase();
  return lowerA.slice(-lowerB.length) === lowerB || lowerB.slice(-lowerA.length) === lowerA;
}

// Solution 2
function endOther(strA, strB) {
  const lowerA = strA.toLowerCase();
  const lowerB = strB.toLowerCase();
  return lowerA.endsWith(lowerB) || lowerB.endsWith(lowerA);
}

console.log(endOther('Hiabc', 'abc')); // → true
console.log(endOther('AbC', 'HiaBc')); // → true
console.log(endOther('abc', 'abXabc')); // → true

/**
 * xyzThere
 * Return true if the given string contains an appearance of 'xyz' where the xyz
 * is not directly preceeded by a period (.). So 'xxyz' counts but 'x.xyz' does
 * not.
 */

// Solution 1
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

// Solution 2
function xyzThere(str) {
  return str.match(/xyz/g) && !str.match(/[\.]xyz/g);
}

console.log(xyzThere('abcxyz')); // → true
console.log(xyzThere('abc.xyz')); // → false
console.log(xyzThere('xyz.abc')); // → true

/**
 * xyzThere
 * Return true if the given string contains a 'bob' string, but where the middle
 * 'o' char can be any char.
 */

// Solution 1
function bobThere(str) {
  return /b.b/g.test(str);
}

// Solution 2
function bobThere(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === 'b' && str.charAt(i + 2) === 'b') {
      return true;
    }
  }
  return false;
}

console.log(bobThere('abcbob')); // → true
console.log(bobThere('b9b')); // → true
console.log(bobThere('bac')); // → false

/**
 * xyBalance
 * We'll say that a String is xy-balanced if for all the 'x' chars in the
 * string, there exists a 'y' char somewhere later in the string. So 'xxy' is
 * balanced, but 'xyx' is not. One 'y' can balance multiple 'x's. Return true if
 * the given string is xy-balanced.
 */

function xyBalance(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === 'x' && str.substring(i, str.length).match(/y/g)) {
      return true;
    }
  }
  return false;
}

console.log(xyBalance('aaxbby')); // → true
console.log(xyBalance('aaxbb')); // → false
console.log(xyBalance('yaaxbb')); // → false

/**
 * mixString
 * Given two strings, a and b, create a bigger string made of the first char of
 * a, the first char of b, the second char of a, the second char of b, and so
 * on. Any leftover chars go at the end of the result.
 */

function mixString(strA, strB) {
  let newStr = '';
  for (let i = 0; i < strA.length + strB.length; i += 1) {
    newStr += strA.charAt(i);
    newStr += strB.charAt(i);
  }
  return newStr;
}

console.log(mixString('abc', 'xyz')); // → 'axbycz'
console.log(mixString('Hi', 'There')); // → 'HTihere'
console.log(mixString('xxxx', 'There')); // → 'xTxhxexre'

/**
 * repeatEnd
 * Given a string and an int n, return a string made of n repetitions of the
 * last n characters of the string. You may assume that n is between 0 and the
 * length of the string, inclusive.
 */

function repeatEnd(str, n) {
  return str.slice(str.length - n).repeat(n);
}

console.log(repeatEnd('Hello', 3)); // → 'llollollo'
console.log(repeatEnd('Hello', 2)); // → 'lolo'
console.log(repeatEnd('Hello', 1)); // → 'o'

/**
 * repeatFront
 * Given a string and an int n, return a string made of the first n characters
 * of the string, followed by the first n-1 characters of the string, and so on.
 * You may assume that n is between 0 and the length of the string, inclusive
 * (i.e. n >= 0 and n <= str.length()).
 */

function repeatFront(str, n) {
  let newStr = '';
  for (let i = n; i > 0; i -= 1) {
    newStr += str.slice(0, i);
  }
  return newStr;
}

console.log(repeatFront('Chocolate', 4)); // → 'ChocChoChC'
console.log(repeatFront('Chocolate', 3)); // → 'ChoChC'
console.log(repeatFront('Ice Cream', 2)); // → 'IcI'

/**
 * repeatSeparator
 * Given two strings, word and a separator sep, return a big string made of
 * count occurrences of the word, separated by the separator string.
 */

function repeatSeparator(strWord, strSep, count) {
  let newStr = '';
  for (let i = 0; i < count; i += 1) {
    newStr += strWord;
    if (i < count - 1) {
      newStr += strSep;
    }
  }
  return newStr;
}

console.log(repeatSeparator('Word', 'X', 3)); // → 'WordXWordXWord'
console.log(repeatSeparator('This', 'And', 2)); // → 'ThisAndThis'
console.log(repeatSeparator('This', 'And', 1)); // → 'This'

/**
 * prefixAgain
 * Given a string, consider the prefix string made of the first N chars of the
 * string. Does that prefix string appear somewhere else in the string? Assume
 * that the string is not empty and that N is in the range 1..str.length().
 */

// Solution 1
function prefixAgain(str, n) {
  return str.match(new RegExp(str.slice(0, n), 'g')).length >= n;
}

// Solution 2
function prefixAgain(str, n) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.slice(i, i + n) === str.slice(0, n)) {
      count += 1;
    }
  }
  return count >= n;
}

console.log(prefixAgain('abXYabc', 1)); // → true
console.log(prefixAgain('abXYabc', 2)); // → true
console.log(prefixAgain('abXYabc', 3)); // → false

/**
 * xyzMiddle
 * Given a string, does 'xyz' appear in the middle of the string? To define
 * middle, we'll say that the number of chars to the left and right of the 'xyz'
 * must differ by at most one. This problem is harder than it looks.
 */

function xyzMiddle(str) {
  const splitArr = str.split('xyz');
  return Math.abs(splitArr[0].length - splitArr[1].length) <= 1;
}

console.log(xyzMiddle('AAxyzBB')); // → true
console.log(xyzMiddle('AxyzBB')); // → true
console.log(xyzMiddle('AxyzBBB')); // → false

/**
 * getSandwich
 * A sandwich is two pieces of bread with something in between. Return the
 * string that is between the first and last appearance of "bread" in the given
 * string, or return the empty string "" if there are not two pieces of bread.
 */

function getSandwich(str) {
  if (str.match(/bread/g).length === 2) {
    return str.split('bread')[1];
  }
  return '';
}

console.log(getSandwich('breadjambread')); // → "jam"
console.log(getSandwich('xxbreadjambreadyy')); // → "jam"
console.log(getSandwich('xxbreadyy')); // → ""

/**
 * sameStarChar
 * Returns true if for every '*' (star) in the string, if there are chars both
 * immediately before and after the star, they are the same.
 */

function sameStarChar(str) {
  let nonStarCount = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === '*' && str.charAt(i - 1) === str.charAt(i + 1)) {
      nonStarCount += 1;
    }
  }
  return nonStarCount > 0;
}

console.log(sameStarChar('xy*yzz')); // → true
console.log(sameStarChar('xy*zzz')); // → false
console.log(sameStarChar('*xa*az')); // → true

/**
 * oneTwo
 * Given a string, compute a new string by moving the first char to come after
 * the next two chars, so "abc" yields "bca". Repeat this process for each
 * subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of
 * fewer than 3 chars at the end.
 */

function oneTwo(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 3) {
    newStr += str.slice(i + 1, i + 3) + str.charAt(i);
  }
  return newStr;
}

console.log(oneTwo('abc')); // → "bca"
console.log(oneTwo('tca')); // → "cat"
console.log(oneTwo('tcagdo')); // → "catdog"

/**
 * zipZap
 * Look for patterns like "zip" and "zap" in the string -- length-3, starting
 * with 'z' and ending with 'p'. Return a string where for all such words, the
 * middle letter is gone, so "zipXzap" yields "zpXzp".
 */

function zipZap(str) {
  return str.replace(/z.p/g, 'zp');
}

console.log(zipZap('zipXzap')); // → "zpXzp"
console.log(zipZap('zopzop')); // → "zpzp"
console.log(zipZap('zzzopzop')); // → "zzzpzp"

/**
 * starOut
 * Return a version of the given string, where for every star (*) in the string
 * the star and the chars immediately to its left and right are gone. So "ab*cd"
 * yields "ad" and "ab**cd" also yields "ad".
 */

function starOut(str) {
  return str.replace(/.\*+./g, '');
}

console.log(starOut('ab*cd')); // → "ad"
console.log(starOut('ab**cd')); // → "ad"
console.log(starOut('sm*eilly')); // → "silly"

/**
 * plusOut
 * Given a string and a non-empty word string, return a version of the original
 * String where all chars have been replaced by pluses ("+"), except for
 * appearances of the word string which are preserved unchanged.
 */

function plusOut(str, word) {
  return str.replace(new RegExp(`[^${word}]`, 'g'), '+');
}

console.log(plusOut('12xy34', 'xy')); // → "++xy++"
console.log(plusOut('12xy34', '1')); // → "1+++++"
console.log(plusOut('12xy34xyabcxy', 'xy')); // → "++xy++xy+++xy"

/**
 * wordEnds
 * Given a string and a non-empty word string, return a string made of each
 * char just before and just after every appearance of the word in the string.
 * Ignore cases where there is no char before or after the word, and a char may
 * be included twice if it is between two words.
 */

function wordEnds(str, word) {
  const excludeExtraChars = new RegExp(`(^|.)${word}(.|$)`, 'g');
  const excludeWord = new RegExp(`${word}`, 'g');
  const newStr = str.match(excludeExtraChars, '').join('').replace(excludeWord, '');
  const length = newStr.length;
  return length > 1 ? newStr : newStr.repeat(length * 2);
}

console.log(wordEnds('abcXY123XYijk', 'XY')); // → "c13i"
console.log(wordEnds('XY123XY', 'XY')); // → "13"
console.log(wordEnds('XY1XY', 'XY')); // → "11"
