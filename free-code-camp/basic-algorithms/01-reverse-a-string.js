// Reverse a String

// Solution 1
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello'); // → 'olleh'
