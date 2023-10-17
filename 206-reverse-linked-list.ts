import { ListNode } from "./utils";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current !== null) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// test
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(reverseList(node1)); // [4,3,2,1]

const node11 = new ListNode(1);
const node22 = new ListNode(2);
const node33 = new ListNode(3);
node11.next = node22;
node22.next = node33;
console.log(reverseList(node11)); // [3,2,1]
