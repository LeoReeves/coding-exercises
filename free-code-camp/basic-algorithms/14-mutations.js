/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.  */

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);

// Result = false
