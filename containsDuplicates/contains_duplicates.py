'''
IOCE
Input: array of numbers
Output: boolean
Constraints: n/a
Edge Cases: TBD

Strategy
Create an object to track counts, if already exists in object, return true
'''

def contains_duplicates(nums):

  counts = {}

  for num in nums:
    if num in counts:
      return True
    else:
      counts[num] = 1

  return False

def contains_duplicates_set(nums):

  hashset = set()

  for n in nums:
    if n in hashset:
      return True

    hashset.add(n)

  return False


input1 = [1,2,3,1]
print(str(contains_duplicates_set(input1)) + ' should be true')

input2 = [1,2,3,4]
print(str(contains_duplicates_set(input2)) + ' should be false')

input3 = [1,1,1,3,3,4,3,2,4,2]
print(str(contains_duplicates_set(input3)) + ' should be true')

