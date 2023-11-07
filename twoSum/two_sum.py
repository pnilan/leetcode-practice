def two_sum(nums, target):

  hashmap = {}

  for i in range(len(nums)):
    if hashmap.get(target - nums[i], None) is None:
      hashmap[nums[i]] = i
    else:
      return [hashmap[target - nums[i]], i]

array1 = [2,7,11,15]
target1 = 9
print(str(two_sum(array1, target1)), 'should be [0, 1]')

array2 = [3,2,4]
target2 = 6
print(str(two_sum(array2, target2)), 'should be [1, 2]')

array3 = [3,3]
target3 = 6
print(str(two_sum(array3, target3)), 'should be [0,1]')