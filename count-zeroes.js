function countZeroes(arr) {
  let first_Idx = find_first_zero(arr);
  if (first_Idx === -1) return 0;
  return arr.length - first_Idx;
}
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function find_first_zero(arr, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return mid;
    } else if (arr[mid] == 1) {
      return find_first_zero(arr, mid + 1, right);
    }
    return find_first_zero(arr, left, mid - 1);
  }
  return -1;
}
module.exports = countZeroes;
