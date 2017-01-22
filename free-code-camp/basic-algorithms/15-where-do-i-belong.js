/**
 * Where do I belong
 * Return the lowest index at which a value (second argument) should be inserted into an array
 * (first argument) once it has been sorted. The returned value should be a number.
 */

function getIndexToIns(arr, num) {
  arr.push(num);
  return arr.sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50); // → 1
