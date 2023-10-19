import { ListNode } from "./utils";

function isPalindrome(head: ListNode | null): boolean {
  let arr: number[] = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  // let counter = 0;
  // while (counter < arr.length / 2) {
  //   if (arr[counter] !== arr[arr.length - 1 - counter]) {
  //     return false;
  //   }
  //   counter++;
  // }
  return true;
}

// test
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(2);
const node4 = new ListNode(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(isPalindrome(node1)); // true
console.log(isPalindrome(node2)); // false
