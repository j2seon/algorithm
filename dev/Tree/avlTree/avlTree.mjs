import { BinaryTree } from "./binaryTree.mjs";

class AVLTree{
  constructor(rootNode = null){
      this.root = rootNode;
  }

  search(targetData) {
    let currentNode = this.root;

    while(currentNode != null) {
      if (currentNode.getData() == targetData ) {
        return currentNode;
      } else if(currentNode.getData() > targetData){
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }
    // 없는 것
    return null;
  }

  // 노드의 높이를 구하는 함수
  getHeight(node) {
    if(node == null) return 0; // 노드가 없는 경우 
    // 노드가 있다면?
    return node.height;
  }

  // 균형이 무너진걸 맞춘 후 다시 높이 계산
  updateHeight(node) {
    // 변경된 노드의 왼쪽 오른쪽 높이를 알아낸 다음
    let leftChildHeight = this.getHeight(node.getLeftSubTree());
    let rightChildHeight = this.getHeight(node.getRightSubTree());
    node.height = Math.max(leftChildHeight, rightChildHeight) + 1;
  }

  // 노드의 좌우 균형을 구하는 함수
  // 값이 양수일 경우 왼쪽이 높이가 더 높음
  getBalanceFactor(node) {
    return this.getHeight(node.getLeftSubTree()) - this.getHeight(node.getRightSubTree()) ;
  }

  // LL 회전 함수 -> 오른쪽으로 쭉 되어있는 경우
  rotateLeft(node) {
    let childNode = node.getRightSubTree();
    
    // 만약 회전시에 이미 왼쪽에 값이 있을 경우를 고려해야한다.
    // 그런 경우 node의 오른쪽 자식 노드가 되면 된다
    node.setRightSubTree(childNode.getLeftSubTree());
    // 그러고 childNode의 왼쪽으로 node를 이어준다
    childNode.setLeftSubTree(node);

    // 노드의 높이가 달라졌기 때문에 높이를 변경해줘야한다. childNode도 높이 바뀜
    this.updateHeight(node);
    this.updateHeight(childNode);

    return childNode; // 바뀐 루트노드 리턴~
  }

  rotateRight(node) {
    let childNode = node.getLeftSubTree();

    node.setLeftSubTree(childNode.getRightSubTree());
    childNode.setRightSubTree(node);

    this.updateHeight(node);
    this.updateHeight(childNode);
    return childNode; // 바뀐 루트노드 리턴~
  }

  // 어떤 회전을 할지 판단하는 함수
  rotation(targetNode, data) { // 타겟 노드 , 균형무너트린 데이터
    // 균형이 맞는지 확인
    let balance = this.getBalanceFactor(targetNode);

    // 회전하는 노드가 root 노드인지 확인해야한다.
    // root 노드가 회전하는 경우 트리의 root노드를 변경해줘야되기 때문
    let isRootNode = false; // 루트노드가 아니라고 가정
    if(targetNode == this.root) {
      isRootNode = true;
    }
    // LL 회전해야하는 상황
    // balance가 음수일때 data가 어디있는지 구분(RL의 경우도 -1이기 때문에 data의 크기를 같이 판단한다)
    if(balance < -1 && data > targetNode.getRightSubTree().getData()) {
      targetNode = this.rotateLeft(targetNode); // 회전한후 결과를 다시 저장
    // RR 회전해야하는 상황
    }else if(balance > 1 && data < targetNode.getLeftSubTree().getData()) {
      targetNode = this.rotateRight(targetNode);
    // LR 회전해야하는 상황
    }else if(balance > 1 && data > targetNode.getLeftSubTree().getData()) {
      targetNode.setLeftSubTree(this.rotateLeft(targetNode.getLeftSubTree())); // 타겟노드의 왼쪽자식노드를를 LL회전해주고 타겟노드의 왼쪽 자식을 바뀐노드로 바꿔줌
      targetNode = this.rotateRight(targetNode); // RR 회전
      // RL 회전해야하는 상황
    }else if(balance < -1 && data > targetNode.getRightSubTree().getData()){
      targetNode.setRightSubTree(this.rotateRight(targetNode.getRightSubTree()));
      targetNode = this.rotateLeft(targetNode);
    }

    // 만약 루트노드가 변경되었다면 ?
    if(isRootNode){
      this.root = targetNode;
    }
    return targetNode;
  }

  // 균형을 무너트리는 노드 찾는 함수 
  getUnBalanceNode() {
    
  }

}

