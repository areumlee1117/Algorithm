function solution(arr) {
    var answer = [];
    if (arr.length<=1){
        return [-1];
    }else{    
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer =  arr;
    }   
    return answer
}
// 1) splice로 자르기
// splice(a, b)
// a: 자르려는 인덱스 번호
// b: 몇개를 자를 것인지
// 2) Math.min로 arr 중 가장 작은 수 구하기
// 3) indexOf로 "1)"의 수를 가지고 있는 arr의 인덱스 구하기