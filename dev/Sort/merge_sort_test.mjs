function mergeTestSort(arr = [], startIndex, lastIndex){

  if(startIndex < lastIndex) {
    let midIndex = parseInt((startIndex + lastIndex) / 2);

    mergeTestSort(arr, startIndex, midIndex);
    mergeTestSort(arr, midIndex + 1, lastIndex);
    sort(arr, startIndex, midIndex, lastIndex);
    console.log(arr);
  }
}

function sort(arr, startIndex, midIndex, lastIndex){
  let firstIndex = startIndex;
  let secondIndex = midIndex + 1;

  let tempArr = new Array(lastIndex).fill(0, 0, lastIndex + 1);
  let tempIndx = startIndex;

  while(firstIndex <= midIndex && secondIndex <= lastIndex) {

    if(arr[firstIndex] < arr[secondIndex]) {
      tempArr[tempIndx] = arr[firstIndex++];
    } else {
      tempArr[tempIndx] = arr[secondIndex++];
    }
    tempIndx++;
  }
  
  if(firstIndex > midIndex) {
    for(let i = secondIndex; i <= lastIndex; i++){
      tempArr[tempIndx++] = arr[i]
    }
  } else {
    for(let i = firstIndex; i<= midIndex; i++) {
      tempArr[tempIndx++] = arr[i];
    }
  }
  for(let i = startIndex; i <= lastIndex; i++){
    arr[i] = tempArr[i];
  }
}


let arr = [3,5,2,4,1,7,8,6]

mergeTestSort(arr, 0, arr.length-1);

console.log(arr);
