function mergeSort(arr = [], leftIndex, rightIndex) {
  
  if(leftIndex < rightIndex){
    // 반으로 나누기 최종 한개가 남을때까지의 -> 재귀를 통해서
    let midIndx = parseInt((leftIndex + rightIndex) / 2);
    mergeSort(arr, leftIndex, midIndx);
    mergeSort(arr, midIndx + 1, rightIndex);
    merge(arr, leftIndex, midIndx, rightIndex)
  }
}

function merge(arr = [], leftIndex, midIndx, rightIndex){
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = midIndx + 1;
  
  //임시로 채워질 배열
  let tempArray = new Array(rightIndex).fill(0, 0, rightIndex + 1); // 0 < 값 < rightindex+1
  // 채워질 배열의 index
  let tempIndex = leftIndex;

  // 왼쪽 배열이 중간인덱스까지 / 오른쪽 배열이 마지막인덱스까지
  while(leftAreaIndex <= midIndx && rightAreaIndex <= rightIndex) {
    if(arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArray[tempIndex] = arr[leftAreaIndex++];
    }else{
      tempArray[tempIndex] = arr[rightAreaIndex++];
    }
    tempIndex++;
  }
  // 만약 오른쪽배열이 병합이 덜된 경우
  if(leftAreaIndex > midIndx) {
    for(let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArray[tempIndex++] = arr[i];
    }
    // 왼쪽이 덜된 경우
  } else {
    for(let i = leftAreaIndex; i <= midIndx; i++) {
      tempArray[tempIndex++] = arr[i];
    }
  }

  // tempArray를 arr에 병합
  for(let i= leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArray[i];
  }

}

let arr = [3,5,2,4,1,7,8,6]

mergeSort(arr, 0, arr.length-1);

console.log(arr);

