function solution(n) {
  var num = 0;
  for (let x = 0; x < n; x++) {
    if (n % x === 1) {
      num = x;
      break;
    }
  }
  return num;
}
