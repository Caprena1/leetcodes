/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// Write a function to delete node
//Create a singly-linked list
//Determine the head
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
 
