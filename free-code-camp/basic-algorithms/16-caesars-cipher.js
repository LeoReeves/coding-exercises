/**
 * Caesars Cipher
 * An implementation of the ROT13 cipher.
 */

function rot13(str) {
  return str.replace(/[A-Z]/g, letter => String.fromCharCode(65 + (letter.charCodeAt(0) - 65 + 13) % 26));
}

rot13('SERR PBQR PNZC'); // → 'FREE CODE CAMP'
