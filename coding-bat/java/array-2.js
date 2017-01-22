/**
 * countEvens
 * Return the number of even ints in the given array.
 */

function countEvens(nums) {
  return nums.filter(v => v % 2 === 0).length;
}

console.log(countEvens([2, 1, 2, 3, 4])); // → 3
console.log(countEvens([2, 2, 0])); // → 3
console.log(countEvens([1, 3, 5])); // → 0

/**
 * bigDiff
 * Given an array length 1 or more of ints, return the difference between the
 * largest and smallest values in the array.
 */

function bigDiff(nums) {
  return Math.max(...nums) - Math.min(...nums);
}

console.log(bigDiff([10, 3, 5, 6])); // → 7
console.log(bigDiff([7, 2, 10, 9])); // → 8
console.log(bigDiff([2, 10, 7, 2])); // → 8

/**
 * centeredAverage
 * Return the "centered" average of an array of ints, which we'll say is the mean
 * average of the values, except ignoring the largest and smallest values in the
 * array. If there are multiple copies of the smallest value, ignore just one
 * copy, and likewise for the largest value. Use int division to produce the final
 * average. You may assume that the array is length 3 or more.
 */

function centeredAverage(nums) {
  const slice = nums.slice(1, nums.length - 1);
  return Math.floor(slice.reduce((a, b) => a + b) / slice.length);
}

console.log(centeredAverage([1, 2, 3, 4, 100])); // → 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7])); // → 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0])); // → -3

/**
 * sum13
 * Return the sum of the numbers in the array, returning 0 for an empty array.
 * Except the number 13 is very unlucky, so it does not count and numbers that
 * come immediately after a 13 also do not count.
 */

function sum13(nums) {
  const index13 = nums.indexOf(13);
  return nums
      .slice(0, index13 >= 0 ? index13 : nums.length)
      .reduce((a, b) => a + b);
}

console.log(sum13([1, 2, 2, 1])); // → 6
console.log(sum13([1, 1])); // → 2
console.log(sum13([1, 2, 2, 1, 13])); // → 6

/**
 * sum67
 * Return the sum of the numbers in the array, except ignore sections of
 * numbers starting with a 6 and extending to the next 7 (every 6 will be
 * followed by at least one 7). Return 0 for no numbers.
 */

function sum67(nums) {
  const index6 = nums.indexOf(6);
  const index7 = nums.indexOf(7);
  if (nums.length === 0) {
    return 0;
  } else if (index6 >= 0 && index7 >= 0) {
    return nums
        .slice(0, index6)
        .concat(nums.slice(index7 + 1, nums.length))
        .reduce((a, b) => a + b);
  }
  return nums
      .slice(0, nums.length)
      .reduce((a, b) => a + b);
}

console.log(sum67([1, 2, 2])); // → 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7])); // → 5
console.log(sum67([1, 1, 6, 7, 2])); // → 4
console.log(sum67([6, 1, 6, 7, 2, 4])); // → 6
console.log(sum67([])); // → 0

/**
 * has22
 * Given an array of ints, return true if the array contains a 2 next to a 2
 * somewhere.
 */

function has22(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

console.log(has22([1, 2, 2])); // → true
console.log(has22([1, 2, 1, 2])); // → false
console.log(has22([2, 1, 2])); //  → false

/**
 * lucky13
 * Given an array of ints, return true if the array contains no 1's and no 3's.
 */

function lucky13(nums) {
  return nums.filter(v => v === 1 || v === 3).length === 0;
}

console.log(lucky13([0, 2, 4])); // → true
console.log(lucky13([1, 2, 3])); // → false
console.log(lucky13([1, 2, 4])); // → false

/**
 * sum28
 * Given an array of ints, return true if the sum of all the 2's in the array
 * is exactly 8.
 */

function sum28(nums) {
  return nums.filter(v => v === 2).reduce((a, b) => a + b) === 8;
}

console.log(sum28([2, 3, 2, 2, 4, 2])); // → true
console.log(sum28([2, 3, 2, 2, 4, 2, 2])); // → false
console.log(sum28([1, 2, 3, 4])); // → false

/**
 * more14
 * Given an array of ints, return true if the number of 1's is greater than the
 * number of 4's.
 */

function more14(nums) {
  return nums.filter(v => v === 1).length > nums.filter(v => v === 4).length;
}

console.log(more14([1, 4, 1])); // → true
console.log(more14([1, 4, 1, 4])); // → false
console.log(more14([1, 1])); // → true

/**
 * fizzArray
 * Given a number n, create and return a new int array of length n, containing
 * the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return
 * a length 0 array. You do not need a separate if-statement for the length-0
 * case; the for-loop should naturally execute 0 times in that case, so it just
 * works.
 */

function fizzArray(n) {
  const newArr = [];
  for (let i = 0; i < n; i += 1) {
    newArr.push(i);
  }
  return newArr;
}

console.log(fizzArray(4)); // → [0, 1, 2, 3]
console.log(fizzArray(1)); // → [0]
console.log(fizzArray(10)); // → [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 /**
 * only14
 * Given an array of ints, return true if every element is a 1 or a 4.
 */

function only14(nums) {
  return nums.filter(v => v !== 1 && v !== 4).length === 0;
}

console.log(only14([1, 4, 1, 4])); // → true
console.log(only14([1, 4, 2, 4])); // → false
console.log(only14([1, 1])); // → true
