function solution(n) {
  let answer = [];
  let arr = String(n).split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    answer.push(parseInt(arr[i]));
  }
  return answer;
}