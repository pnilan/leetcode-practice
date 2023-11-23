'''
Given n pairs of parantheses, write a function that generates all combos of well-formed parantheses.

IOCE:
Input: n, integer
Output: array of strings
Constraints: must be well-formed (i.e. valid)
Edge Cases: n/a

Strategy:
track count of closed and open parantheses
Closing parenthesis can only be added when # of open is greater than number of closed
if number of closed = number of open AND n, then the string is completed (base case)
Recursive approach

Pseudocode:
set variable closed to zero
set variable open to zero

if closed == open == n, then return array

if closed < open == n, then append closing parenthesis

if closed < open < n, then append a closing parenthesis and separately append an opening one, call recursive function

create inner recursive function which takes argument open, closed, and array of paranthesis

when return append result to result array
'''


def generate_parantheses(n: int):

  res = []
  stack = []

  def inner_function(open=0, closed=0):

    if open == closed == n:
      res.append(''.join(stack))
      return

    if open < n:
      stack.append('(')
      inner_function(open + 1, closed)
      stack.pop()

    if closed < open:
      stack.append(')')
      inner_function(open, closed + 1)
      stack.pop()

  inner_function()

  return res

n = 3
expected = ['((()))', '(()())', '(())()', '()(())', '()()()']
print(generate_parantheses(n))

n = 1
expected = ['()']
print(generate_parantheses(n))



