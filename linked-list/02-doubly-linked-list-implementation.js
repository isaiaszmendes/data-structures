class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentList = this.head;
    const list = [];
    while(currentList !== null) {
      list.push(currentList.value);
      currentList = currentList.next;
    }
    return list;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);

    if(index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);

    const newNode = new Node(value);
    
    const follower = leader.next;

    follower.prev = newNode;
    newNode.prev = leader;

    leader.next = newNode
    newNode.next = follower;
    this.length++;
  }

  removeFirst() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  removeLast() {
    const newTail = this.traverseToIndex(this.length - 1);
    this.tail = newTail.prev;
    this.tail.next = null

    this.length--;
  }

  remove(index) {
    if (index === 0) return this.removeFirst();

    if (index === this.length - 1) return this.removeLast();

    if (index >= this.length) return;

    let leader = this.traverseToIndex(index -1);

    const unwantedNode = leader.next;
    unwantedNode.next.prev = leader;
    leader.next = unwantedNode.next
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let count = 0;

    while(count < index && currentNode !== null) { 
      currentNode = currentNode.next;
      count ++;
    }
    return currentNode;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2,15);
myDoublyLinkedList.remove(0)
console.log(myDoublyLinkedList.printList());
   