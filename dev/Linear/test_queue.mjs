import { Queue} from "./Queue.mjs";
import { DoublyLinkedList } from "./DoublyLinkedList.mjs";
import { ExamDoublyLinkedList } from "./more.mjs";

let queue = new Queue();

console.log("===== enqueue() 세 번 호출 =====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("===== dequeue() 네 번 호출 =====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty: ${queue.isEmpty()}`);


let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertAt(0,0);
doublyLinkedList.insertAt(1,1);
doublyLinkedList.insertAt(2,2);
doublyLinkedList.insertAt(3,3);

doublyLinkedList.printAll();

console.log(doublyLinkedList.deleteAt(0));

console.log("===== 내가만든 =====");
let ex = new ExamDoublyLinkedList();

ex.insertAt(0,0);
ex.insertAt(1,1);
ex.insertAt(2,2);
ex.insertAt(3,3);

ex.printAll();

console.log(ex.removeAt(2));
ex.printAll();
