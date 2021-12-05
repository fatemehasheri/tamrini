let example = [1, 2, 3, 4, 5];
function checkNumber(array, namber) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == namber) {
      return i;
    }
  }
  return -1;
}
console.log(checkNumber(example, 4));
