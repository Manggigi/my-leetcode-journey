function sumBase(n: number, k: number): number {
  const total = (parseInt(Math.floor(n / k).toFixed(0)) + (n % k)).toString();

  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += parseInt(total[i]);
  }

  return sum;
}

console.log(sumBase(34, 6)); // 9
console.log(sumBase(10, 10)); // 1
console.log(sumBase(42, 2)); // 3
console.log(sumBase(68, 2)); // 7 TODO: debug
