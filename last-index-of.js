function lastIndexOf(array, num) {
  var result = 0;
  var match = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      result = i;
      match = true;
    }
  }
  if (match) {
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5, 5, 0 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
