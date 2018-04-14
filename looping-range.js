function range(start, end, step) {
  var invalidArray = [ ];
  var validArray = [ ];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return invalidArray;
  } else
  for (var i = start; i <= end; i += step) {
    validArray.push(i);
  }
  return validArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));