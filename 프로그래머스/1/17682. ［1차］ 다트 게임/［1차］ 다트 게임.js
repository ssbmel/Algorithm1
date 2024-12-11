function solution(scoreStr) {
  const scores = []; // 각 세트의 점수를 저장할 배열
  const regex = /(\d{1,2})([SDT])([*#]?)/g; // 점수, 보너스, 옵션 추출하는 정규표현식
  let match;

  // 입력된 문자열에서 각 세트를 추출
  while ((match = regex.exec(scoreStr)) !== null) {
    let [_, point, bonus, option] = match; // 추출된 점수, 보너스, 옵션
    let score = Number(point); // 점수를 숫자로 변환

    // 보너스(S, D, T)에 따른 점수 제곱 적용
    if (bonus === 'S') score **= 1; // Single → 1제곱
    else if (bonus === 'D') score **= 2; // Double → 2제곱
    else if (bonus === 'T') score **= 3; // Triple → 3제곱

    // 옵션 처리
    if (option === '*') {
      score *= 2; // 현재 점수를 2배로
      if (scores.length > 0) {
        // 직전 점수도 2배로 만든다.
        scores[scores.length - 1] *= 2;
      }
    } else if (option === '#') {
      score *= -1; // 현재 점수를 음수로
    }

    // 계산된 점수를 배열에 추가
    scores.push(score);
  }

  // 최종 점수 합산
  return scores.reduce((total, curr) => total + curr, 0);
}

