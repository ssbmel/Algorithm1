function solution(k, m, score) {
    var answer = 0;

    // 1. 점수를 내림차순으로 정렬합니다.
    score.sort((a, b) => b - a);

    // 2. 상자를 만들 수 있는 최대 개수 계산
    const boxCount = Math.floor(score.length / m);

    // 3. 각 상자의 최저 점수를 기준으로 이익 계산
    for (let i = 0; i < boxCount; i++) {
        // 상자에 담긴 최저 점수
        const boxMinScore = score[i * m + m - 1];

        // 상자 이익 계산
        answer += boxMinScore * m;
    }

    return answer;
}
