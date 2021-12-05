function number() {
  let counter = -Infinity;
  for (let org of arguments) {
    if (counter < org) {
      counter = org;
    }
  }
  return counter;
}
console.log(number(2, -300, 7, 8, 6, 5, 2));
