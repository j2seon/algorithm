import { HashTable } from "./HashTable.mjs";


let hashTable = new HashTable();


hashTable.set(1,"김땡땡");
hashTable.set(4,"노땡땡");
hashTable.set(20,"박땡땡");
hashTable.set(22,"류땡땡");
hashTable.set(21,"홍땡땡");
hashTable.set(5,"현땡땡");
hashTable.set(10,"주땡땡");
hashTable.set(8,"조땡땡");
hashTable.set(9,"장땡땡");
hashTable.set(14,"신땡땡");
hashTable.set(6,"염땡땡");

console.log(`1: ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`5: ${hashTable.get(5)}`);
