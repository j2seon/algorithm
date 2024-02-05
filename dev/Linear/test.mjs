import { Node, LinkList } from './LinkedList.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);
console.log("====================================");

let list = new LinkList();
console.log("===============list에 insertAt() 호출=====================");

list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();
console.log("===============list에 count 호출=====================");

console.log(list.count);
console.log("===============list에 clear호출=====================");
list.clear();
list.printAll();

console.log("===============list에 lastInsertAt호출=====================");
list.lastInsertAt(1);
list.lastInsertAt(2);
list.lastInsertAt(3);
list.lastInsertAt(4);
list.printAll();

list.deleteAt(2);
list.printAll();
list.deleteAt(0);
list.printAll();
list.lastDelete();
list.printAll();
list.lastDelete();
list.printAll();




