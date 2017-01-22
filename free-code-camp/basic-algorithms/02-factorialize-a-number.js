/**
 * Factorialize a Number
 * Returns the factorial of the provided integer.
 */

function factorialize(num) {
  let factor = 1;
  for (let i = 1; i <= num; i += 1) {
    factor *= i;
  }
  return factor;
}

factorialize(5); // → 120
