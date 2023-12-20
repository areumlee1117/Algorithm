// function solution(s) {
//     return (s.length === 4 || s.length === 6) && (Number(s)) ? true : false;
// }

function solution(s) {
  let num = parseInt(s);

  if ((s.length === 4 || s.length === 6) && s == num) {
    num = true;
  } else {
    num = false;
  }
  return num;
}
