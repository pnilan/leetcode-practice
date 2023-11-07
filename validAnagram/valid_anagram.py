def is_anagram(s, t):

  if len(s) != len(t):
    return False

  countS, countT = {}, {}

  for i in range(len(s)):
    countS[s[i]] = countS.get(s[i], 0) + 1
    countT[t[i]] = countT.get(t[i], 0) + 1

  for key in countS:
    if countS[key] != countT.get(key, 0):
      return False

  return True

s1 = 'anagram'
t1 = 'nagaram'
print(str(is_anagram(s1, t1)), 'should be true')

s2 = 'rat'
t2 = 'car'
print(str(is_anagram(s2, t2)), 'should be false')