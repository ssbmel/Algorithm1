function solution(answers) {
    // 각 수포자의 찍는 방식 패턴 정의
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 수포자들의 점수를 저장할 배열
    const scores = [0, 0, 0];

    // answers 배열의 정답과 각 수포자의 패턴 비교
    answers.forEach((answer, index) => {
        if (answer === pattern1[index % pattern1.length]) scores[0]++;
        if (answer === pattern2[index % pattern2.length]) scores[1]++;
        if (answer === pattern3[index % pattern3.length]) scores[2]++;
    });

    // 가장 높은 점수를 찾음
    const maxScore = Math.max(...scores);

    // 가장 높은 점수를 받은 수포자의 번호를 배열에 담아 반환
    return scores
        .map((score, index) => (score === maxScore ? index + 1 : null))
        .filter((num) => num !== null);
}
