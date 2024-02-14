import { BinaryTree } from "./binaryTree.mjs";

class BinarySearchTree{
    constructor(rootNode = null){
        this.root = rootNode;
    }

    insert(data){
        if(this.root == null){
            this.root = new BinaryTree(data);
            return;
        }

        let currentNode = this.root;
        let parentNode = null;

        while(currentNode != null){
            parentNode = currentNode;

            if(currentNode.getData() > data){
                currentNode = currentNode.getLeftSubTree();
            } else if(currentNode.getData() < data){
                currentNode = currentNode.getRightSubTree();
            }else{
                return;
            }
        }

        let newNode = new BinaryTree(data);

        if(parentNode.getData() > data){
            parentNode.setLeftSubTree(newNode);
        } else {
            parentNode.setRightSubTree(newNode);
        }
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

    remove(targetData) {
      // 루트노드를 제거할경우 사용
      let tempRootNode = new BinarySearchTree(0);
      let parentNode = tempRootNode;
      let currentNode = this.root;
      let deletingNode = null;

      tempRootNode.setRightSubTree(this.root);

      // 현재노드가 null이 아니고 현재노드의 값이 내가 지정한 값과 같지않을 때
      while(currentNode != null && currentNode.getData() != targetData) {
        parentNode = currentNode;

        if(currentNode.getData() > targetData) {
          currentNode = currentNode.getLeftSubTree();
        } else {
          currentNode = currentNode.getRightSubTree();
        }
      }

      if(currentNode == null) return;

      deletingNode = currentNode;

      // 터미널 노드를 제거할 경우
      if(deletingNode.getLeftSubTree() == null && deletingNode.getRightSubTree()) {
        if(parentNode.getLeftSubTree() == deletingNode){
          parentNode.removeLeftSubTree()
        } else {
          parentNode.removeRightSubTree();
        }
        // 자식노드가 하나있는 노드를 제거할 경우
      } else if(deletingNode.getLeftSubTree() == null || deletingNode.getRightSubTree()) {
        let deletedNodeChilde;
        if(deletingNode.getLeftSubTree() != null){ // 왼쪽이 있는 경우
          deletedNodeChilde = deletingNode.getLeftSubTree();
        }else {
          deletedNodeChilde = deletingNode.getRightSubTree();
        }
        
        if(parentNode.getLeftSubTree() == deletingNode) {
          parentNode.setLeftSubTree(deletedNodeChilde);
        } else {
          parentNode.setRightSubTree(deletedNodeChilde);
        }
        // 자식노드가 두개있는 노드를 제거할 경우 
      } else {
        // 왼쪽노드에서 가장 큰 값을 찾아 제거하 노드의 위치에 놔주면 된다 
        let replaceNode = deletingNode.getRightSubTree();
      }

    







    }
}

let binarySearchTree = new BinarySearchTree();
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
console.log(binarySearchTree.search(6));


console.log("========== Search 1 ==========");
console.log(binarySearchTree.search(31));