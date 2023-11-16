function solution(x) {
  let sum = 0;
  let arr = String(x).split("");
  for (let i = 0; i < arr.length; i++) {
    sum += +(arr[i]);
  }
  return x % sum == 0 ? true : false;
}
