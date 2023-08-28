// https://leetcode.com/problems/maximum-product-subarray/

// IOCE
// Input: array of ints
// Output: integer
// Constraints: n/a
// Edge Cases: tbd

// strategy
// left and right pointers?
// product tracks "largest" product
// need to check negatives somehow -- lookahead?
//

const maxProduct = (nums) => {

  var product = nums[0];
  var previousMax = nums[0];
  var previousMin = nums[0];

  for (var i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * previousMax, nums[i] * previousMin];

    previousMax = Math.max(...options);
    previousMin = Math.min(...options);

    product = Math.max(product, previousMax);
  }



  return product;
};