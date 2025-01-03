function solution(s) {
    let answer = 0; // 분리된 문자열 개수
    let aCount = 0; // 첫 글자(x)의 개수
    let bCount = 0; // 첫 글자가 아닌 글자의 개수
    
    for (let i = 0; i < s.length; i++) {
        if (aCount === 0) {
            // 새로운 분리 시작 시 첫 글자 설정
            x = s[i];
        }

        // 현재 글자가 x인지 아닌지 카운트
        if (s[i] === x) {
            aCount++;
        } else {
            bCount++;
        }

        // 두 카운트가 같으면 분리
        if (aCount === bCount) {
            answer++;    // 분리 횟수 증가
            aCount = 0;  // 카운트 초기화
            bCount = 0;  // 카운트 초기화
        }
    }

    // 반복문 종료 후 남은 부분 처리
    if (aCount !== 0 || bCount !== 0) {
        answer++;
    }

    return answer; // 결과 반환
}
