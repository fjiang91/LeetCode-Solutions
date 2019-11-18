function ListNode(val){
  this.val = val;
  this.next = null;
}

function plusOneRecursion (node) {
  if (!node) return 1;

  node.val += plusOneRecursion(node.next);

  if (node.val > 9) {
      node.val %= 10;
      return 1;
  }

  return 0;
};

var plusOne = function(head) {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let carry = plusOneRecursion(head);

  if (carry > 0) {
      let newHead = new ListNode(carry);
      newHead.next = head;
      dummyHead.next = newHead;
  };

  return dummyHead.next;
};

module.exports = plusOne;
