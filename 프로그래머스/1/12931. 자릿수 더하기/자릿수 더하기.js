function solution(n) {
  var answer = 0;
  let 분해 = String(n);
  for (let i = 0; i < 분해.length; i++) {
    answer += parseInt(분해[i]);
  }
  return answer;
}