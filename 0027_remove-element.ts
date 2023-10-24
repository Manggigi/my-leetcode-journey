function removeElement(nums: number[], val: number): number {
  const clonedNums = [...nums];
  for (let num of clonedNums) {
    if (num === val) {
      nums.splice(nums.indexOf(num), 1);
    }
  }
  return nums.length;
}

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
