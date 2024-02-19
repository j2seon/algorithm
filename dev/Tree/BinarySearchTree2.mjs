import { BinaryTree } from "./binaryTree.mjs";

class BinarySearchTree2 {
  constructor(rootNode = null) {
    this.root = rootNode;
  }

  // 삽입
  insert(data) {
    // 처음 값을 넣는 경우
    if(this.root == null) {
      this.root = new BinaryTree(data);
      return;
    }

    let parentNode = null;
    let currentNode = this.root;

    // 왼쪽이 노드보다 작은거 오른쪽이 큰거
    while(currentNode != null) {
      // 내려가면서 현재노드가 부모노드가 될거고
      parentNode = currentNode;
      // 삽입할 데이터보다 노드값이 더 크다면
      if(currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree(); // 왼쪽이동
      // 삽입할 데이터보다 노드값이 더 작다면
      } else if(currentNode.getData() < data) {
        currentNode = currentNode.getRightSubTree();
      } else {
        //같다면 while문을 나간다. -> 삽입하기위해서
        return;
      }
    }
    // 새로만들어주고
    let addNewNode = new BinaryTree(data);

    // 부모만 자식을 볼수있는 상황이니 부모노드와 이어준다
    if(parentNode.getData() > data) { // 부모의 데이터가 더 크면 왼쪽~
      parentNode.setLeftSubTree(addNewNode);
    } else {
      parentNode.setRightSubTree(addNewNode); // 부모의 데이터가 더 작으면 오른쪽~
    }
  }

  // 조회
  select(data) {
    // 처음시작하면 맨위일테니까~
    let currentNode = this.root;

    while(currentNode != null) {
      // 전달받은 데이터와 같을 경우
      if(currentNode.getData() == data) {
        return currentNode;
      } else if(currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }
    return null; //없음
  }
  // 제거
  remove(data){
    //모든 노드가 부모노드가 있다고 생각하고 제거하기위해 rootNode의 부모를 만들어준다
    let tempRootNode = new BinaryTree(0);
    let parentNode = tempRootNode;
    let currentNode = this.root;
    let deletingNode = null;

    tempRootNode.setRightSubTree(this.root); // 그러고 실제 우리의 루트와 연결해주자~

    // null이 아니고 값을 찾기위해 반복문
    while(currentNode != null && currentNode.getData() != data) {
      parentNode = currentNode;

      if(currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }

    // 계속 타고 내려갔는데 값이 없어서 null이되고~ 당연히 데이터도 없겠지?
    if(currentNode == null) return;

    deletingNode = currentNode;

    // 1.터미널 노드를 없애는경우
    if(deletingNode.getLeftSubTree() == null && deletingNode.getRightSubTree() == null) {
      // 1-1. 부모의 왼쪽에 있을때
      if(parentNode.getLeftSubTree() == deletingNode){
        parentNode.removeLeftSubTree()
      // 1-2. 부모의 오른쪽에 있을때
      } else {
        parentNode.removeRightSubTree();
      }
    //2. 자식노드가 하나 있는 경우
    } else if (deletingNode.getLeftSubTree() == null || deletingNode.getRightSubTree()) {
      // 자식노드를 담기위한 변수
      let deletedNodeChild;
      // 2-1. 왼쪽에 있는경우
      if(deletingNode.getLeftSubTree() != null) {
        deletedNodeChild = deletingNode.getLeftSubTree();
      // 2-2. 오른쪽에 있는 경우
      } else {
        deletedNodeChild = deletingNode.getRightSubTree();
      }
      // 부모노드에서 temp랑 연곂되어야한다
      // 부모의 왼쪽 노드가 내가 삭제하려는 노드랑 같으면 
      if(parentNode.getLeftSubTree() == deletingNode) {
        parentNode.setLeftSubTree(deletedNodeChild);
      }else {
        parentNode.setRightSubTree(deletedNodeChild);
      }
    //3. 자식노드가 두개있는 노드를 제거하는 경우 
    } else {
      // 왼쪽 자식노드에서 가장 큰값을 삭제하려는 노드와 바꿔치기할거임(값만)
      // 먼저 삭제할 노드의 왼쪽을 가리키자
      let replaceNode = deletingNode.getLeftSubTree();
      // 삭제할 노드의 부모노드를 가리키자
      let replaceParentNode = deletingNode;

      // 왼쪽노드뭉탱이들의 가장 큰 값은 맨 오른쪽에 있겠지?
      // 따라서 오른쪽의 노드가 null이 아닐때 까지 반복문을 돈다
      while(replaceNode.getRightSubTree() != null){
        // 하나씩 내려가니까 부모 노드가 밑으로 내려가고 replaceNode는 오른쪽노드 변경
        replaceParentNode = replaceNode;
        replaceNode = replaceNode.getRightSubTree();
      }

      // 위의 반복문을 돌게되면 대체하려는 노드의 값을 알게된다
      // data의 값만 변경해주기 위해서 제거한 노드의 data를 변수에 담아주고
      let resultData = deletingNode.getData();
      // 삭제하는 노드의 값만 변경해주자
      deletingNode.setData(replaceNode.getData());

      // replaceParentNode에 자식노드를 연결해야한다.
      if(replaceParentNode.getRightSubTree() == replaceNode) {
        replaceParentNode.setRightSubTree(replaceNode.getLeftSubTree());
      } 

      // 삭제하려는 노드를 반환하기 위해서 
      // deleteNode를 replaceNode로 변경하고
      deletingNode = replaceNode;
      // 삭제하는 노드의 값을 위에서 구한 값으로 변경해준다
      deletingNode.setData(resultData);

      // 그리고 만약 root 노드가 변경된 경우 
      // 현재 tempRootNode를 이용하고 있기 때문에 
      if(tempRootNode.getRightSubTree() != this.root) {
        this.root = tempRootNode.getRightSubTree();
      }
    }
    return deletingNode;
  }
}


let binarySearchTree = new BinarySearchTree2();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log("========== Search 6 ==========");
console.log(binarySearchTree.select(6));


console.log("========== Search 1 ==========");
console.log(binarySearchTree.select(31));

console.log("========== remove 10 ==========");
console.log(binarySearchTree.remove(10));

console.log("========== remove 10 ==========");
console.log(binarySearchTree.remove(10));