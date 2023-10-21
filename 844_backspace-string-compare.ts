function backspaceCompare(s: string, t: string): boolean {
  // initialize first and second string array
  let firstString: string[] = [];
  let secondString: string[] = [];

  // iterate the first string
  for (let c of s) {
    c !== "#" ? firstString.push(c) : firstString.pop();
  }

  // iterate the second string
  for (let c of t) {
    c !== "#" ? secondString.push(c) : secondString.pop();
  }

  // check the value of first and second string
  return firstString.join("") === secondString.join("");
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); //
