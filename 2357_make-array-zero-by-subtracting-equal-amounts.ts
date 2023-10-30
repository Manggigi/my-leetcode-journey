function minimumOperations(nums: number[]): number {
  // return early if all nums are 0
  let nonZeroNums: number[] = nums.filter((num) => num !== 0);
  if (nonZeroNums.length === 0) return 0;

  let decrementCounter = Math.min(...nonZeroNums);
  let counter = 0;

  // use recursion for better performance
  for (let i = 0; i < nonZeroNums.length; i++) {
    nonZeroNums[i] -= decrementCounter;
    if (nonZeroNums[i] === 0) {
      nonZeroNums[i] = 0;
    }
  }
  return counter + minimumOperations(nonZeroNums) + 1;

  // Runtime
  // 54ms
  // Beats 74.58%of users with TypeScript

  // Memory
  // 44.41MB
  // Beats 20.34%of users with TypeScript

  // while (nonZeroNums.length) {
  //   const bar = nonZeroNums.map((num) => {
  //     return num && num - decrementCounter > 0 ? num - decrementCounter : 0;
  //   });
  //   nonZeroNums = bar.filter(Boolean);
  //   decrementCounter = Math.min(...nonZeroNums);
  //   counter++;
  // }
  // return counter;

  // Runtime
  // 63ms
  // Beats 23.73%of users with TypeScript

  // Memory
  // 44.26MB
  // Beats 30.51%of users with TypeScript
}

// tests
// console.log(minimumOperations([1, 5, 0, 3, 5])); // 3
// console.log(minimumOperations([0])); // 0
console.log(minimumOperations([10])); // 1
// console.log(minimumOperations([8, 9])); // 6
// console.log(minimumOperations([8, 9, 10])); // 7
