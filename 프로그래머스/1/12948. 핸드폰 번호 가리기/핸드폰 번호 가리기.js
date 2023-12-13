function solution(phone_number) {
  let n = phone_number.length;
  let start = "*".repeat(n - 4);

  return start + phone_number.slice(-4);  
}


// repeat 메소드
// String.repeat(count)
// count : 문자열을 거듭 덧붙이는 횟수

// slice 메소드
// 배열을 잘라서 새롭게 추출해줌
// arr.slice(-n) // 마지막 n개의 요소 추출