function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(sum);
  }
  return answer;
}


// 배열 안에 배열이 있는 형태
// i를 0부터 arr1의 길이만큼 돌리고 sum 이라는 새로운 배열에 넣기

// sum 이라는 새로운 변수에
// arr1의 i번째 인덱스의 j번째 요소와
// arr2의 i번째 인덱스의 j번째 요소를 곱한 것을 push해서 넣어주고 더하기
// 마지막에 sum을 answer에 넣어주기