class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkList{
  constructor(){
    this.head = null;
    this.count = 0;
  }

  // 삽입
  insertAt(index, data){
    if(index > this.count || index < 0) throw new Error("범위를 넘어섬");

    let newNode = new Node(data);

    if (index === 0) {
      // 맨앞으로 들어가야하는 경우
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      
      for(let i = 0; i < index -1 ; i++){
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  //마지막 삽입 
  lastInsertAt(data){
    let newNode = new Node(data);
    this.insertAt(this.count, newNode.data);
  }

  // 전체 출력
  printAll(){
    let currentNode = this.head;
    let text = '[';
    while(currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if(currentNode != null) {
        text += ', '
      }
    }
    text += ']'
    console.log(text);
  }

  // 전체 삭제
  clear(){
    this.head = null;
    this.count = 0; 
  }

  // 특정 index 삭제
  deleteAt(index){
    let currentNode = this.head;
    
    if(index >= this.count || index < 0) throw new Error("해당 index에 값이 없습니다.")

    if(index === 0){
      let deleteNode = this.head;
      this.head = deleteNode.next;
      this.count--;
      return deleteNode;
    } else {
      for(let i = 0; i < index -1; i++){
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = deleteNode.next;
      this.count--;
      return deleteNode;
    }
  }

  // 마지막 index 삭제
  lastDelete(){
    this.deleteAt(this.count - 1);
  }

}
export { Node, LinkList };