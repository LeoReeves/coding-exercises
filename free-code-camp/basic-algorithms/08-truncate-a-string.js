/**
 * Truncate a string
 * Truncate the first argument if it is longer than the given maximum string length
 * second argument), return the truncated string with a ... ending.
 */

function truncateString(str, num) {
  if (num <= 3) {
    return `${str.slice(str, num)}...`;
  } else if (num >= str.length) {
    return str.slice(str, num);
  }
  return `${str.slice(str, num - 3)}...`;
}

truncateString('A-tisket a-tasket A green and yellow basket', 11); // → Result = "A-tisket..."
