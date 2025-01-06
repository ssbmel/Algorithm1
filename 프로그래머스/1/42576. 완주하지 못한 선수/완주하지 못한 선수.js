function solution(participant, completion) {
    var answer = '';
    
    // 1. Map 객체를 생성합니다. (이름-등장횟수를 저장)
    let participantMap = new Map();

    // 2. participant 배열을 순회하며 등장 횟수를 카운트합니다.
    for (let name of participant) {
        if (participantMap.has(name)) {
            // 이미 존재하면 등장 횟수 증가
            participantMap.set(name, participantMap.get(name) + 1);
        } else {
            // 처음 등장한 이름이면 1로 초기화
            participantMap.set(name, 1);
        }
    }

    // 3. completion 배열을 순회하며 등장 횟수를 감소시킵니다.
    for (let name of completion) {
        if (participantMap.has(name)) {
            participantMap.set(name, participantMap.get(name) - 1);
        }
    }

    // 4. Map을 순회하며 값이 1 이상인 키(이름)를 찾습니다.
    for (let [key, value] of participantMap) {
        if (value > 0) {
            answer = key; // 완주하지 못한 선수의 이름 저장
            break;
        }
    }

    // 5. 결과 반환
    return answer;
}
