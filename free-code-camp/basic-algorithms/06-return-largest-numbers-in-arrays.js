// Returns an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
    largest.push(Math.max.apply(Math,arr[i]));
  }  
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Result = [5, 27, 39, 1001]
