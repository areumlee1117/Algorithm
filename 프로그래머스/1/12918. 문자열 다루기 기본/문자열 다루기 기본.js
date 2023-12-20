// function solution(s) {
//     return (s.length === 4 || s.length === 6) && (Number(s)) ? true : false;
// }

function solution(s) {
  let num = parseInt(s);

  return (s.length === 4 || s.length === 6) && s == num ? true : false;
}