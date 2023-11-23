const generateParentheses = (n, closed = 0, open = 0, res = [], combo = [], start = performance.now()) => {

  if (combo.length === n * 2) {
    res.push(combo.join(''));
    return res;
  }

  if (open < n) {
    combo.push('(');
    res.concat(generateParentheses(n, closed, open + 1, res, combo));
    combo.pop();
  }

  if (closed < open) {
    combo.push(')');
    res.concat(generateParentheses(n, closed + 1, open, res, combo));
    combo.pop();
  }

  return res;

};

let n = 9;
let expected = ['()'];
const start = performance.now();
generateParentheses(n);
const end = performance.now();

console.log(`Elapsed time: ${Math.round((end - start) * 10000) / 10000} ms`);
