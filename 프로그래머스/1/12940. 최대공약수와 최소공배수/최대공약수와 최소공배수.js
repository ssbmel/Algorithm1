function solution(a, b) {
  // 최대공약수를 구하는 함수 (유클리드 호제법 사용)
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // 최소공배수를 구하는 공식: a * b / gcd(a, b)
  let gcdValue = gcd(a, b);
  let lcmValue = (a * b) / gcdValue;
  
  // 배열로 최대공약수와 최소공배수를 반환
  return [gcdValue, lcmValue];
}
