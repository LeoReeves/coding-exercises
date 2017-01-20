/* Splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  var chunk = [];
  while (arr.length > 0) {
    chunk.push(arr.splice(0,size));
  }
  return chunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Result = "[["a", "b"], ["c", "d"]]
