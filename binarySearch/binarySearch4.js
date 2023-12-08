const search = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;

    if (target < nums[mid]) {
      right = mid - 1;
    } else if (taget > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
