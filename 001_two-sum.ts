function twoSum(nums: number[], target: number): number[] {
  if (!nums.length) return [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];

  // for (let [index1, num1] of nums.entries()) {
  //     for (let [index2, num2] of nums.entries()) {
  //         if (index1 === index2) continue
  //         if (num1 + num2 === target) return [index1, index2]
  //     }
  // }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
