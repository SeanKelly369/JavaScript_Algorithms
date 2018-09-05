// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nail = null;
    this.length = 0;
  }
  // Push node
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Pop node
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shift node
  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Unshift node
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Set
  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Insert
  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    removed = previousNode.next;
    this.length--;
    return removed;
  }
}


let list = new SinglyLinkedList();

list.push("test");
list.push("test2");
list.push("test3");
list.pop(1);
list.shift(1);
list.unshift("add me");
list.get(0);
list.set(0, "testing");
list.insert(0, "First");
list.insert(2, "Last");
list.remove(1);
console.log(list);
// Good way
// list.push("you");



// Bad way to represent a linked list
// var first = new Node("Hi");
// first.next = new Node(" there");
// first.next.next = new Node(". How");
// first.next.next.next = new Node(" are");
// first.next.next.next.next = new Node(" you");
