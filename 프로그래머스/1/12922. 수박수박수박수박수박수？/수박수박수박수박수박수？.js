// function solution(n) {
//     let answer = '';
//     for(i=0; i<n; i++){
//         if(i%2===0) answer += '수'
//         else answer += '박'
//     }
//     return answer
// }

function solution(n) {
    let answer = '';
    
    // 1) n이 짝수인 경우, n/2만큼 '수박'을 반복
    if (n % 2 === 0) {
        answer = '수박'.repeat(n / 2);
    
    // 2) n이 홀수인 경우, n/2만큼 '수박'을 반복한 뒤 '수'를 1회 추가
    // repeat() 함수에서는 괄호 안의 인자가 소수일 때, 자동으로 내림 처리해 정수로 인식하기 때문
    } else {
        answer = '수박'.repeat(n / 2) + '수';
    }
    
    return answer;
}