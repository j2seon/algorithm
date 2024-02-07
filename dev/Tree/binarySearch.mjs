function binarySearch1 (arr = [], target, start, end) {
  if(start > end){
    return null;
  }
  let mid =  Math.ceil((start + end) / 2);

  if(arr[mid] == target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch1(arr, target, start, mid - 1);
  } else {
    return binarySearch1(arr, target, mid + 1, end);
  }
}

// 반복문으로 
function binarySearch2 (arr = [], target) {

  let start = 0;
  let end = arr.length -1;
  let mid;

  while(start <= end) {
    mid = Math.ceil((start + end) / 2);

    if (arr[mid] > target){
      end = mid - 1;
    } else if(arr[mid] < target){
      start = start + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let arr = [1,2,3,4,5,6];

console.log(binarySearch2(arr, 4));
console.log(binarySearch1(arr, 2, 0, arr.length-1));