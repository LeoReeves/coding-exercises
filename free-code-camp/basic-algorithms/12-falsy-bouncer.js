/**
 * Falsy bouncer
 * Remove all falsy values from an array.
 */

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]); // → [7, "ate", 9]

