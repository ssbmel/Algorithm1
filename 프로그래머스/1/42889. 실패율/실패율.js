function solution(N, stages) {
    var answer = [];
    let totalPlayers = stages.length; // 전체 사용자 수
    let failureRates = []; // 실패율을 저장할 배열

    // 각 스테이지별 실패율 계산
    for (let i = 1; i <= N; i++) {
        let notCleared = stages.filter(stage => stage === i).length; // i번 스테이지에 멈춰 있는 사람 수
        let failureRate = notCleared / totalPlayers; // 실패율 계산

        failureRates.push({ stage: i, rate: failureRate }); // 실패율과 스테이지 저장
        totalPlayers -= notCleared; // 다음 스테이지의 전체 사용자 수에서 멈춘 사람 제외
    }

    // 실패율 기준 내림차순 정렬, 같다면 스테이지 번호 오름차순 정렬
    failureRates.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage; // 실패율이 같으면 스테이지 번호 오름차순
        }
        return b.rate - a.rate; // 실패율 기준 내림차순 정렬
    });

    // 정렬된 스테이지 번호만 answer 배열에 추가
    answer = failureRates.map(item => item.stage);
    return answer;
}
