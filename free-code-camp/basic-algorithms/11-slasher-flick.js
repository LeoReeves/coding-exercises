/**
 * Slasher Flick
 * Return the remaining elements of an array after chopping off n elements from the head.
 * string (second argument, target).
 */

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2); // → true
