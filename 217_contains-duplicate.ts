function containsDuplicate(nums: number[]): boolean {
  const stack: { [num: string]: number } = {};

  for (let num of nums) {
    if (stack[num]) {
      return true;
    }

    stack[num] = 1;
  }

  return false;
}

// log tests
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
