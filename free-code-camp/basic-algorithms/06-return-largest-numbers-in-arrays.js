// Returns an array consisting of the largest number from each provided sub-array.

// Solution 1
function largestOfFour(arr) {
  const largest = [];
  for (let i = 0; i < arr.length; i += 1) {
    largest.push(Math.max(...arr[i]));
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// → [5, 27, 39, 1001]


// Solution 2
function largestOfFour2(arr) {
  return arr.map(num => Math.max(...num));
}

largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// → [5, 27, 39, 1001]
