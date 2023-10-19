function plusOne(digits: number[]): number[] {
  // const foo = digits.join("");
  // return (parseInt(foo) + 1)
  //   .toString()
  //   .split("")
  //   .map((x) => parseInt(x));
  digits[digits.length - 1] += 1;
  return digits;
}

console.log(plusOne([1, 2, 3]));
