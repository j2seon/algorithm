import { DoublyLinkedList } from './DoublyLinkedList.mjs';


class Deck {
  constructor(){
    this.list = new DoublyLinkedList();
  }

  printAll(){
    this.list.printAll();
  }

  addFirst(data){
    this.list.insertAt(0, data);
  }

  removeFirst(){
    this.list.deleteAt(0);
  }

  addLast(data){
    this.list.insertAt(this.list.count, data);
  }

  removeLast(){
    this.list.deleteLast();
  }

  isEmpty(){
    return (this.list.count === 0 );
  }
}

export { Deck };