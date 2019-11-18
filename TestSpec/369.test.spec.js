const plusOne = require('../369.plus-one-linked-list');
const {constructLinkedList, compareLinkedList} = require('../CompareLinkedList');

describe('plusOne -> Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.', () => {
  it ('Linked List = [3,4,5]', () => {
    const expectedList = constructLinkedList([3,4,6]);
    const actualList = plusOne(constructLinkedList([3,4,5]));
    const isEqual = compareLinkedList(actualList, expectedList);
    expect(isEqual).toEqual(true);
  });

  it('Linked List = [0]', () => {
    const expectedList = constructLinkedList([1]);
    const actualList = plusOne(constructLinkedList([0]));
    const isEqual = compareLinkedList(actualList, expectedList);
    expect(isEqual).toEqual(true);
  });

  it('Linked List = [9,9,9]', () => {
    const expectedList = constructLinkedList([1,0,0,0]);
    const actualList = plusOne(constructLinkedList([9,9,9]));
    const isEqual = compareLinkedList(actualList, expectedList);
    expect(isEqual).toEqual(true);
  });
});
