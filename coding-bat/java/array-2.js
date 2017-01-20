// countEvens
// http://codingbat.com/prob/p162010

function countEvens(nums){
	return nums.filter(v => v % 2 === 0).length;
}

console.log(countEvens([2, 1, 2, 3, 4])); // → 3
console.log(countEvens([2, 2, 0])); // → 3
console.log(countEvens([1, 3, 5])); // → 0

// bigDiff
// http://codingbat.com/prob/p196640

function bigDiff(nums) {
	return Math.max(...nums) - Math.min(...nums);
}

console.log(bigDiff([10, 3, 5, 6])); // → 7
console.log(bigDiff([7, 2, 10, 9])); // → 8
console.log(bigDiff([2, 10, 7, 2])); // → 8

// centeredAverage
// http://codingbat.com/prob/p136585

function centeredAverage(nums) {
	nums = nums.slice(1, nums.length - 1);
	return Math.floor(nums.reduce((a, b) => a + b) / nums.length);
}

console.log(centeredAverage([1, 2, 3, 4, 100])); // → 3
console.log(centeredAverage([1, 1, 5, 5, 10, 8, 7])); // → 5
console.log(centeredAverage([-10, -4, -2, -4, -2, 0])); // → -3

// sum13
// http://codingbat.com/prob/p127384

function sum13(nums) {
	index13 = nums.indexOf(13);
	return nums.slice(0, index13 >= 0 ? index13 : nums.length).reduce((a, b) => a + b);
}

console.log(sum13([1, 2, 2, 1])); // → 6
console.log(sum13([1, 1])); // → 2
console.log(sum13([1, 2, 2, 1, 13])); // → 6

// sum67
// http://codingbat.com/prob/p111327

function sum67(nums) {
	const index6 = nums.indexOf(6);
	const index7 = nums.indexOf(7);
	if (index6 >= 0 && index7 >= 0) {
		return nums
			.slice(0, index6)
			.concat(nums.slice(index7+1, nums.length))
			.reduce((a, b) => a + b);
	} else {
		return nums
			.slice(0, nums.length)
			.reduce((a, b) => a + b);
	}
}

console.log(sum67([1, 2, 2])); // → 5
console.log(sum67([1, 2, 2, 6, 99, 99, 7])); // → 5
console.log(sum67([1, 1, 6, 7, 2])); // → 4
console.log(sum67([6, 1, 6, 7, 2, 4])); // → 6

// has22
// http://codingbat.com/prob/p121853

function has22(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 2 && nums[i+1] == 2) {
			return true;
		}
	}
	return false;
}

console.log(has22([1, 2, 2])); // → true
console.log(has22([1, 2, 1, 2])); // → false
console.log(has22([2, 1, 2])); //  → false

// lucky13
// http://codingbat.com/prob/p194525

function lucky13(nums) {
	return nums.filter(v => v == 1 || v == 3).length === 0;
}

console.log(lucky13([0, 2, 4])) // → true
console.log(lucky13([1, 2, 3])) // → false
console.log(lucky13([1, 2, 4])) // → false
