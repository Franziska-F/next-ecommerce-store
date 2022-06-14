function totalSum(arrayToTest) {
  let total = arrayToTest.reduce(function (prev, current) {
    return prev + current.quantitiy * current.price;
  }, 0);
  return total;
}

test('calculate total sum', () => {
  let arrayToTest = [
    { quantitiy: 2, price: 4 },
    { quantitiy: 3, price: 2 },
  ];
  expect(totalSum(arrayToTest)).toBe(14);
});
