// https://leetcode.com/problems/implement-queue-using-stacks/

MyQueue.prototype.push = function(x) {
  if (!this.popStackCount) {
    this.addStack.push(x);
    this.addStackCount++;
  } else {
    for (var i = 0; i < this.popStackCount; i++) {
      let item = this.popStack.pop();
      this.addStack.push(item);
    }
    this.addStack.push(x);
    this.addStackCount = this.popStackCount + 1;
    this.popStackCount = 0;
  }
};

MyQueue.prototype.pop = function() {
  if (!this.addStackCount) {
    this.popStackCount--;
    return this.popStack.pop();
  } else {
    for (var i = 0; i < this.addStackCount; i++) {
      let item = this.addStack.pop();
      this.popStack.push(item);
    }
    this.popStackCount = this.addStackCount - 1;
    this.addStackCount = 0;
    return this.popStack.pop();
  }
};

MyQueue.prototype.peek = function() {
  return !this.addStackCount ? this.popStack[this.popStackCount - 1] : this.addStack[0];
};

MyQueue.prototype.empty = function() {
  return !this.addStackCount && !this.popStackCount;
};