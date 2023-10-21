function countSymmetricIntegers(low: number, high: number): number {
  let counter: number = 0;
  for (let i = low; i <= high; i++) {
    let string: string = i.toString();

    // only add numbers are possible for symmetric
    if (string.length % 2 === 0) {
      // check the sum of the first and last half if equal
      let sum1: number = 0;
      let sum2: number = 0;
      for (let j = 0; j < string.length / 2; j++) {
        sum1 += parseInt(string[j]);
        sum2 += parseInt(string[string.length - 1 - j]);
      }

      sum1 === sum2 && counter++;
    }
  }
  return counter;
}

console.log(countSymmetricIntegers(1, 100)); // 9
console.log(countSymmetricIntegers(1200, 1230)); // 4
