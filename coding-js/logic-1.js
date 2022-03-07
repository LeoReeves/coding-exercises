function maxMod5(a, b) {
  if (a === b) {
    return 0
  } else if (a % 5 === b % 5) {
    return Math.min(a, b)
  } else {
    return Math.max(a, b)
  }
}

function maxTriple(nums) {
  return Math.max(nums[0], nums[Math.floor(nums.length / 2)], nums[nums.length - 1])
}

function nestParen(str) {
  if (str.length === 0) {
    return true
  } else if (str[0] === '(' && str[str.length - 1] === ')') {
    return nestParen(str.substring(1, str.length - 1))
  } else {
    return false
  }
}