// ? 10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    
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
    
    const next = leader.next  
    leader.next = newNode
    newNode.next = next;
    this.length++;
  }

  removeFirst() {
    this.head = this.head.next;
    this.length--;
  }

  removeLast() {
    const newTail = this.traverseToIndex(this.length - 1);
    this.tail = newTail.next
    newTail.next = null
    this.length--;
  }

  remove(index) {
    if (index === 0) return this.removeFirst();

    if (index === this.length - 1) return this.removeLast(index);

    if (index >= this.length) return;

    let leader = this.traverseToIndex(index -1);

    const unwantedNode = leader.next
    leader.next = unwantedNode.next;
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

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0,99);
myLinkedList.insert(2,55);
// myLinkedList.remove(0)
// console.log(myLinkedList.printList());
myLinkedList.remove(0);
console.log(myLinkedList.printList());
