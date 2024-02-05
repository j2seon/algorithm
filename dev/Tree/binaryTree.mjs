class BinaryTree {
  constructor(data, leftTree = null, rightTree = null) {
    this.data = data;
    this.leftTree = leftTree;
    this.rightTree = rightTree;
  }

  getData() {
    return this.data;
  } 

  setData(data) {
    this.data = data;
  }

  getLeftSubTree() {
    return this.leftTree;
  }

  getRightSubTree() {
    return this.rightTree;
  }

  setLeftSubTree(data) {
    this.leftTree = data;
  }
  
  setRightSubTree(data) {
    this.rightTree = data;
  }

  // 전위 순회
  preOrderTraversal(tree) {
    if(tree == null) return ; 
    console.log(tree.data); 
    this.preOrderTraversal(tree.getLeftSubTree());
    this.preOrderTraversal(tree.getRightSubTree());
  }
  
  // 중위 순회
  inOrderTraversl(tree){
    if(tree == null) return ; 
    // 왼쪽 노드부터 방문
    this.inOrderTraversl(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraversl(tree.getRightSubTree());
  }

  // 후위 순회
  postOrderTraversal(tree) {
    if(tree == null) return ; 

    this.postOrderTraversal(tree.getLeftSubTree());
    this.postOrderTraversal(tree.getRightSubTree());
    console.log(tree.data);
  }

}

export { BinaryTree };