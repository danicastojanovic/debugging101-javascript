const multiplyAllNums = nums => {
  let total = 0;
  for(num of nums) {
    total *= num;
  }
  return total;
}
multiplyAllNums([5, 4, 3, 2, 1]); // Expect: 120