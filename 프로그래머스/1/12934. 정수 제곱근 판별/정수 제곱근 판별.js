function solution(n) { 
    
    // i를 1부터 n까지 증가시켜줍니다.
    for (let i = 1; i <= n; i++) {
        // if문으로 i 와 i 를 곱했을 때 정확히 n이 되는 i 값을 구해줍니다.
        if (i * i === n) {
            // i 와 i 가 곱해졌을 때 n이 된다면 아래의 식을 실행하여 답을 제출
            return (i + 1) * (i + 1);
        }
    }

    // 그게 아니라면 -1을 제출
    return -1;
}