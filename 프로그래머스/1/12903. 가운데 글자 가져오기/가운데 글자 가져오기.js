function solution(s) {
    var answer = ''; 
    console.log(s[0])
      if (s.length %2 == 0) {
      answer = s[s.length / 2 - 1] + s[s.length / 2]
    } else {
      answer = s[Math.floor(s.length/2)]
    }
    return answer;
    
}
