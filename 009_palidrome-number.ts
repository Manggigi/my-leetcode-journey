function isPalindrome(x: number): boolean {
  const string: string = x.toString();

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] === string[string.length - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
