function quickSort(arr = [], left, right){

  if(left <= right) {
    let pivotIndex = divide(arr, left, right); // 정렬된 피폿의 index를 반환
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function divide(arr, left, right) {
  let pivot = arr[left]; // 가장왼쪽에 있는 데이터를 피봇으로 지정
  let leftIndex = left + 1; // 피폿 바로 뒤에 숫자부터~
  let rightIndex = right;

  // 서로 지나치면 종료!
  while(leftIndex <= rightIndex) {

    // leftIndex는 계속 오른쪽으로 이동 피벗데이터보다 크면 멈추고 
    //rightIndex는 계속 왼쪽으로 이동 피벗데이터보다 작으면 멈춤 -> 그러고 둘이 위치를 바꿔준다
    while(leftIndex <= right && pivot >= arr[leftIndex] ) {
      leftIndex++;
    }

    while(rightIndex >= left + 1 && pivot <= arr[rightIndex]){ // 피봇 뒤에 index까지만 이니까 left + 1 ~
      rightIndex--;
    }
    
    // 서로 자리를 swap 한다
    if(leftIndex <= rightIndex) {
      swap(arr, leftIndex, rightIndex);
    }
  }

  // 서로 index를 지났기 때문에 피봇이랑 rigthIndex의 값을 바꿈
  swap(arr, left, rightIndex);

  return rightIndex;
}

function swap(arr, leftIndex, rightIndex){
  let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

let arr = [3,5,2,4,1,7,8,6];

quickSort(arr, 0, arr.length-1);

console.log(arr);
