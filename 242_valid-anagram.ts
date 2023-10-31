function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const stack: { [char: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
      stack[s[i]] = stack[s[i]] ? stack[s[i]] + 1 : 1;
      stack[t[i]] = stack[t[i]] ? stack[t[i]] - 1 : -1;
  }

  return !Object.values(stack).find((v) => v !== 0);
}

// tests
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
