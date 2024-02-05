function insertionSort(arr = []){
  for(let i = 1; i < arr.length; i++){
    let insertData = arr[i];

    let j;
    for(j = i - 1; j >= 0 ; j --){
      if(arr[j] > insertData){
        arr[j + 1] = arr[j]
      }else{
        break;
      }
    }  
    arr[j + 1] = insertData;
  }
}
let arr = [6,1,2,3,2];

console.log("===== 정렬 전 =====");
console.log(arr);

insertionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);


