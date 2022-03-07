/**
 * sleepIn
 * The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
 * We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
 */

function sleepIn(weekday, vacation) {
  return !weekday || vacation
}

/**
 * monkeyTrouble
 * We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble
 * if they are both smiling or if neither of them is smiling. Return true if we are in trouble.
 */

function monkeyTrouble(aSmile, bSmile){
  return aSmile && bSmile || !aSmile && !bSmile
}

/**
 * sumDouble
 * Given two int values, return their sum. Unless the two values are the same, then return double their sum.
*/

function sumDouble(a, b) {
  const sum = a + b
  return a === b ? sum * 2 : sum
}

/**
 * diff21
 * Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n 
 * is over 21.
 */

function diff21 (n) {
  const absoluteDifference = Math.abs(n - 21)
  return n > 21 ? absoluteDifference * 2 : absoluteDifference
}

/** 
 * parrotTrouble
 * We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if
 * the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.
 */

function parrotTrouble(talking, hour) {
  return talking && (hour < 7 || hour > 20)
}

/**
 * makes10
 * Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10
 */

function makes10(a, b) {
  const oneIs10 = (a === 10 || b === 10)
  const sumIs10 = a + b === 10
  return oneIs10 || sumIs10
}

/** 
 * nearHundred
 * Given an int n, return true if it is within 10 of 100 or 200 
 * */

function nearHundred(n) {
  const withinTenOfOneHundred = Math.abs(n - 100) <= 10
  const withinTenOfTwoHundred = Math.abs(n - 200) <= 10
  return withinTenOfOneHundred || withinTenOfTwoHundred
}

/**
 * posNeg
 * Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true,
 * then return true only if both are negative.
 */

function posNeg(a, b, negative) {
  const aPositive = a > 0
  const bPositive = b > 0
  const aNegative = a < 0
  const bNegative = b < 0
  const bothNegative = aNegative && bNegative
  const oneIsNegativeOneIsPositive = (aPositive && bNegative) || (aNegative && bPositive)
  return negative ? bothNegative : oneIsNegativeOneIsPositive
}

/** 
 * notString
 * Given a string, return a new string where "not " has been added to the front. However, if the string already begins
 * with "not", return the string unchanged.
 */

function notString(str) {
  return str.substring(0, 3) === 'not' ? str : `not ${str}`
}

// missingChar
// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n
// will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

function missingChar(str, n){
  return str.substring(0, n) + str.substring(n + 1, str.length)
}

// frontBack
// Given a string, return a new string where the first and last chars have been exchanged.

function frontBack(str) {
  return str.length > 1 ? `${str.charAt(str.length - 1)}${str.substring(1, str.length - 1)}${str.charAt(0)}` : str
}

/**
 * front3
 * Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the 
 * front is whatever is there. Return a new string which is 3 copies of the front.
 * 
 */

function front3(str){
  return str.length > 3 ? str.substring(0, 3).repeat(3) : str.repeat(3)
}

/**
 * backAround
 * Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 
 * 'tcatt' The original string will be length 1 or more.
 */

function backAround(str){
  const lastChar = str.charAt(str.length - 1)
  return `${lastChar}${str}${lastChar}`
}