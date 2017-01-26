/**
 * cigarParty
 * When squirrels get together for a party, they like to have cigars. A squirrel
 * party is successful when the number of cigars is between 40 and 60,
 * inclusive. Unless it is the weekend, in which case there is no upper bound
 * on the number of cigars. Return true if the party with the given values is
 * successful, or false otherwise.
 */
 
function cigarParty(cigars, isWeekend) {
  return cigars >= 40 && cigars <= 60 || isWeekend && cigars >= 40;
}
 
console.log(cigarParty(30, false)); // → false
console.log(cigarParty(50, false)); // → true
console.log(cigarParty(70, true)); // → true

/**
 * dateFashion
 * You and your date are trying to get a table at a restaurant. The parameter
 * "you" is the stylishness of your clothes, in the range 0..10, and "date" is
 * the stylishness of your date's clothes. The result getting the table is
 * encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very
 * stylish, 8 or more, then the result is 2 (yes). With the exception that if
 * either of you has style of 2 or less, then the result is 0 (no). Otherwise
 * the result is 1 (maybe).
 */

function dateFashion(you, date) {
  if (you <= 2 || date <= 2) {
    return 0;
  }
  else if (you > 8 || date > 8) {
    return 2;
  }
  return 1;
}
 
console.log(dateFashion(5, 10)); // → 2
console.log(dateFashion(5, 2)); // → 0
console.log(dateFashion(5, 5)); // → 1

/**
 * squirrelPlay
 * The squirrels in Palo Alto spend most of the day playing. In particular, they
 * play if the temperature is between 60 and 90 (inclusive). Unless it is
 * summer, then the upper limit is 100 instead of 90. Given an int temperature
 * and a boolean isSummer, return true if the squirrels play and false
 * otherwise.
 */
 
function squirrelPlay(temp, isSummer) {
  return temp >= 60 && temp <= 90 || isSummer && temp >= 60 && temp <= 100;
} 

console.log(squirrelPlay(70, false)); // → true
console.log(squirrelPlay(95, false)); // → false
console.log(squirrelPlay(95, true)); // → true

/**
 * caughtSpeeding
 * You are driving a little too fast, and a police officer stops you. Write code
 * to compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
 * 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
 * and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
 * Unless it is your birthday -- on that day, your speed can be 5 higher in all
 * cases.
 */

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) speed -= 5;
  if (speed <= 60) return 0;
  return speed >= 61 && speed <= 80 ? 1 : 2;
}
 
console.log(caughtSpeeding(60, false)); // → 0
console.log(caughtSpeeding(65, false)); // → 1
console.log(caughtSpeeding(65, true)); // → 0

/**
 * sortaSum
 * Given 2 ints, a and b, return their sum. However, sums in the range 10..19
 * inclusive, are forbidden, so in that case just return 20.
 */

function sortaSum(a, b) {
  const sum = a + b;
  const forbidden = sum >= 10 && sum <= 19;
  return !forbidden ? sum : 20;
}

console.log(sortaSum(3, 4)); // → 7
console.log(sortaSum(9, 4)); // → 20
console.log(sortaSum(10, 11)); // → 21

/**
 * sortaSum
 * Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a
 * boolean indicating if we are on vacation, return a string of the form "7:00"
 * indicating when the alarm clock should ring. Weekdays, the alarm should be
 * "7:00" and on the weekend it should be "10:00". Unless we are on vacation --
 * then on weekdays it should be "10:00" and weekends it should be "off".
 */

function alarmClock(day, vacation) {
  const weekday = day >= 1 && day <= 5;
  const weekend = day === 6 || day === 0;
  if (vacation && weekday || !vacation && weekend) {
    return '10:00';
  } else if (weekday) {
    return '7:00';
  }
  return 'off';
}

console.log(alarmClock(1, false)); // → "7:00"
console.log(alarmClock(5, false)); // → "7:00"
console.log(alarmClock(0, false)); // → "10:00"

/**
 * love6
 * The number 6 is a truly great number. Given two int values, a and b, return
 * true if either one is 6. Or if their sum or difference is 6.
 */

function love6(a, b) {
  return (a === 6 || b === 6) || (a + b === 6) || (Math.abs(a - b) === 6);
}

console.log(love6(6, 4)); // → true
console.log(love6(4, 5)); // → false
console.log(love6(1, 5)); // → true

/**
 * in1To10 
 * Given a number n, return true if n is in the range 1..10, inclusive. Unless
 * "outsideMode" is true, in which case return true if the number is less or
 * equal to 1, or greater or equal to 10.
 */
 
function in1To10(n, outsideMode) {
  if (!outsideMode) {
    return n >= 1 && n <= 10;
  }
  return n <= 1 || n >= 10;
}
 
console.log(in1To10(5, false)); // → true
console.log(in1To10(11, false)); // → false
console.log(in1To10(11, true)); // → true