// Returns the factorial of the provided integer.

function factorialize(num) {
  var factor = 1;
  for (var i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}

factorialize(5);

// Result = 120
