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
 * Return the "centered" average of an array of ints, which we'll say is the
 * mean average of the values, except ignoring the largest and smallest values
 * in the array. If there are multiple copies of the smallest value, ignore just
 * onecopy, and likewise for the largest value. Use int division to produce the
 * final average. You may assume that the array is length 3 or more.
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

/**
* fizzArray2
* Given a number n, create and return a new string array of length n, containing
* the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return
* a length 0 array.
*/

function fizzArray2(n) {
  const newArr = [];
  for (let i = 0; i < n; i += 1) {
    newArr.push(String(i));
  }
  return newArr;
}

console.log(fizzArray2(4)); // → ["0", "1", "2", "3"]
console.log(fizzArray2(9)); // → ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
console.log(fizzArray2(2)); // → ["0", "1"]

/**
* no14
* Given an array of ints, return true if it contains no 1's or it contains no
* 4's.
*/

function no14(nums) {
  return nums.indexOf(1) === -1 || nums.indexOf(4) === -1;
}

console.log(no14([1, 2, 3])); // → true
console.log(no14([1, 2, 3, 4])); // → false
console.log(no14([2, 3, 4])); // → true

/**
* isEverywhere
* We'll say that a value is "everywhere" in an array if for every pair of
* adjacent elements in the array, at least one of the pair is that value.
* Return true if the given value is everywhere in the array.
*/

function isEverywhere(nums, val) {
  const arr = [];
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] === val || nums[i + 1] === val) {
      arr.push([nums[i], nums[i + 1]]);
    }
  }
  return arr.length === Math.round(nums.length / 2);
}

console.log(isEverywhere([2, 1, 1, 3], 1)); // → true
console.log(isEverywhere([1, 2, 3, 4], 2)); // → false
console.log(isEverywhere([1, 2, 1, 3, 4], 1)); // → false

/**
* either24
* Given an array of ints, return true if the array contains a 2 next to a
* 2 or a 4 next to a 4, but not both.
*/

function either24(nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      arr.push(nums[i], nums[i + 1]);
    } else if (nums[i] === 4 && nums[i + 1] === 4) {
      arr.push(nums[i], nums[i + 1]);
    }
  }
  return arr.filter(v => v === 2).length !== arr.filter(v => v === 4).length;
}

console.log(either24([1, 2, 2])); // → true
console.log(either24([4, 4, 1])); // → true
console.log(either24([4, 4, 1, 2, 2])); // → false
console.log(either24([4, 3, 1, 1, 1])); // → false

/**
* matchUp
* Given arrays nums1 and nums2 of the same length, for every element in nums1,
* consider the corresponding element in nums2 (at the same index). Return the
* count of the number of times that the two elements differ by 2 or less, but
* are not equal.
*/

function matchUp(nums1, nums2) {
  let count = 0;
  for (let i = 0; i < nums1.length; i += 1) {
    if (nums1[i] !== nums2[i] && Math.abs(nums1[i] - nums2[i]) <= 2) {
      count += 1;
    }
  }
  return count;
}

console.log(matchUp([1, 2, 3], [2, 3, 10])); // → 2
console.log(matchUp([1, 2, 3], [2, 3, 5])); // → 3
console.log(matchUp([1, 2, 3], [2, 3, 3])); // → 2

/**
* has77
* Given an array of ints, return true if the array contains two 7's next to
* each other, or there are two 7's separated by one element, such as with
* {7, 1, 7}.
*/

function has77(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if ((nums[i] === 7 && nums[i + 1] === 7) || (nums[i] === 7 && nums[i + 2] === 7)) {
      return true;
    }
  }
  return false;
}

console.log(has77([1, 7, 7])); // → true
console.log(has77([1, 7, 1, 7])); // → true
console.log(has77([1, 7, 1, 1, 7])); // → false

/**
* has12
* Given an array of ints, return true if there is a 1 in the array with a
* 2 somewhere later in the array.
*/

function has12(nums) {
  return nums.indexOf(1) >= 0 && nums.indexOf(2) >= nums.indexOf(1);
}

console.log(has12([1, 3, 2])); // → true
console.log(has12([3, 1, 2])); // → true
console.log(has12([3, 1, 4, 5, 2])); // → true

/**
* modThree
* Given an array of ints, return true if the array contains either 3 even or 3
* odd values all next to each other.
*/

function modThree(nums) {
  const evenArr = [];
  const oddArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0 && nums[i + 2] % 2 === 0) {
      evenArr.push(nums[i], nums[i + 1], nums[i + 2]);
    } else if (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0 && nums[i + 2] % 2 !== 0) {
      oddArr.push(nums[i]);
    }
  }
  return evenArr.length === 3 || oddArr.length === 3;
}
console.log(modThree([2, 1, 3, 5])); // → true
console.log(modThree([2, 1, 2, 5])); // → false
console.log(modThree([2, 4, 2, 5])); // → true

/**
* haveThree
* Given an array of ints, return true if the value 3 appears in the array
* exactly 3 times, and no 3's are next to each other.
*/

function haveThree(nums) {
  let countThrees = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 3 && nums[i + 1] !== 3) {
      countThrees += 1;
    }
  }
  return countThrees === 3;
}

console.log(haveThree([3, 1, 3, 1, 3])); // → true
console.log(haveThree([3, 1, 3, 3])); // → false
console.log(haveThree([3, 4, 3, 3, 4])); // → false

/**
* twoTwo
* Given an array of ints, return true if every 2 that appears in the array is
* next to another 2.
*/

function twoTwo(nums) {
  const twoPairs = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      twoPairs.push(nums[i], nums[i + 1]);
    }
  }
  return twoPairs.length === nums.filter(v => v === 2).length;
}

console.log(twoTwo([4, 2, 2, 3])); // → true
console.log(twoTwo([2, 2, 4])); // → true
console.log(twoTwo([2, 2, 4, 2])); // → false

/**
* sameEnds
* Return true if the group of N numbers at the start and end of the array are
* the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same
* for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the
* range 0..nums.length inclusive.
*/

function sameEnds(nums, len) {
  return nums.slice(0, len).join('') === nums.slice(nums.length - len).join('');
}

console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 1)); // → false
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2)); // → true
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 3)); // → false

/**
* tripleUp
* Return true if the array contains, somewhere, three increasing adjacent
* numbers like .... 4, 5, 6, ... or 23, 24, 25.
*/

function tripleUp(nums) {
  let countTriple = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i + 1] === nums[i] + 1 && nums[i + 2] === nums[i] + 2) {
      countTriple += 1;
    }
  }
  return countTriple >= 1;
}

console.log(tripleUp([1, 4, 5, 6, 2])); // → true
console.log(tripleUp([1, 2, 3])); // → true
console.log(tripleUp([1, 2, 4])); // → false

/**
* fizzArray3
* Given start and end numbers, return a new array containing the sequence of
* integers from start up to but not including end, so start=5 and end=10 yields
* {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number.
* Note that a length-0 array is valid.
*/

function fizzArray3(start, end) {
  const arr = [];
  for (let i = start; i < end; i += 1) {
    arr.push(i);
  }
  return arr;
}

console.log(fizzArray3(5, 10)); // → [5, 6, 7, 8, 9]
console.log(fizzArray3(11, 18)); // → [11, 12, 13, 14, 15, 16, 17]
console.log(fizzArray3(1, 3)); // → [1, 2]

/**
* shiftLeft
* Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns
* {2, 5, 3, 6}. You may modify and return the given array, or return a new
* array.
*/

// Solution 1
function shiftLeft(nums) {
  return nums.concat(nums.splice(0, 1));
}

// Solution 2
function shiftLeft(nums) {
  const len = nums.length - 3;
  return nums.slice(len).concat(nums.slice(0, len));
}

console.log(shiftLeft([6, 2, 5, 3])); // → [2, 5, 3, 6]
console.log(shiftLeft([1, 2])); // → [2, 1]
console.log(shiftLeft([1])); // → [1]
