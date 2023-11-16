// function solution(x) {
//   let sum = 0;
//   let arr = String(x).split("");
//   for (let i = 0; i < arr.length; i++) {
//     sum += +(arr[i]);
//   }
//   return (x % sum == 0) ? true : false;
// }


function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +a + +b));
}