const ret = [1, 2, 3, 4, 5, 11, 12].reduce(
  (max, num) => (num > max ? num : max),
  0
);

console.log(ret);
