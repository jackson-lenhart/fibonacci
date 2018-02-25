"use strict";

function fib(n) {
  if (isNaN(n) || n < 1 || n % 1 !== 0) {
    throw new Error("fibonacci expects a nonnegative integer");
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  let seq = [1, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[0] + seq[1]);
    seq = seq.slice(1, 3);
  }
  return seq[1];
}

module.exports = fib;
