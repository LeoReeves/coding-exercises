// Check for Palindromes

function palindrome(str) {
  const lowerStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return lowerStr === lowerStr.split('').reverse().join('');
}

palindrome('_Eye'); // → true
