import {HashTable} from './HashTable.mjs';

class Set{
  constructor(){
    this.hashTable = new HashTable();
  }

  add(data){
    // 데이터가 업을 때 add 해야되기 때문
    if(this.hashTable.get(data) == null){
      this.hashTable.set(data,1);
    }
  }

  isContain(data){
    return this.hashTable.get(data) !== null ? true : false;
  }

  remove(data){
    return this.hashTable.remove(data);
  }
  
  clear(){
    // 전체 순회하고 전부 클리어
    for(let i = 0; i < this.hashTable.arr.length; i++){
      this.hashTable.arr[i].clear();
    }
  }
  
  isEmpty(){
    let empty = true;

    for(let i = 0; i < this.hashTable.arr.length; i++){
      if(this.hashTable.arr[i])
    }
  }

  printAll(){}
}

export {Set};