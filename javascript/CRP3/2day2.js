function weekDays(number) {
  if (number > 6 || number < 0) {
    return "undefined";
  }
  const days = {
    0: "saterday",
    1: "sunday",
    2: "monday",
    3: "tuesday",
    4: "wednesday",
    5: "thursday",
    6: "friday",
  };
  return days[number];
}
console.log(weekDays(6));
