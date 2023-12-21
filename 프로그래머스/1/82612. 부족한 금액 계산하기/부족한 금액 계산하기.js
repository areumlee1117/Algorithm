function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += i * price;
  }
  return money > totalPrice ? 0 : totalPrice - money;
}

// 필요한 금액은 1*price + 2*price + ... + i*price
// for문으로 i까지 돌린 후 필요한 금액 구하기
// money와 필요한 금액 비교하기