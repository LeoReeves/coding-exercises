/**
 * Minimum
 * Write a function min that takes two arguments and returns their minimum.
 */
 
function minimum(a, b) {
  return a > b ? b : a;
}

console.log(minimum(10, 3));
// → 3

/**
 * Recursion
 * Define a recursive function isEven
 */

// Recursive Solution
function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return isEven(num + 2);
  } else {
    return isEven(num - 2);
  }
}

// Non-recursive Solution
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-30));
// → false

/**
 * Bean Counting
 * Write a function countBs that takes a string as its only argument and returns
 * a number that indicates how many uppercase “B” characters are in the string.
 */

// Solution 1
function countBs(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      count++;
    }
  }
  return count;
}

// Solution 2
function countBs(str) {
  return str.split('').filter(v => v === 'B').length;
}

// Solution 3
function countBs(str) {
  return str.replace(/[^B]/g, '').length;  
}

console.log(countBs("BBC"));
// → 2

/**
 * Next, write a function called countChar that behaves like countBs, except it 
 * takes a second argument that indicates the character that is to be counted
 * (rather than counting only uppercase “B” characters). Rewrite countBs to make
 * use of this new function.
 */

// Solution 1
function countChar(str, character) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === character) {
      count++;
    }
  }
  return count;
}

// Solution 2
function countChar(str, character) {
  return str.split('').filter(v => v === character).length;
}

// Solution 3
function countChar(str, character) {
  return str.match(new RegExp(character, 'g')).length;
}

console.log(countChar("kakkerlak", "k"));
// → 4
