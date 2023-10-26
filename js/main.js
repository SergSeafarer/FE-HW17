const totalSum = function () {
  let total = 0;
  return function (someNumber) {
    total += someNumber;
    return total;
  }
}
const sum = totalSum();
const resultFirst = sum(3);
const resultSecond = sum(5);
const resultThird= sum(20);
console.log(resultFirst, resultSecond, resultThird);