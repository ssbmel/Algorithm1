function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"]; // 조카가 발음할 수 있는 단어 목록

    // 각 단어에 대해 처리
    babbling.forEach(babble => {
        let isValid = true; // 유효한 발음인지 체크
        let prevWord = ""; // 이전에 발음한 단어를 저장
        
        while (babble.length > 0 && isValid) {
            let found = false;
            for (let word of words) {
                if (babble.startsWith(word) && prevWord !== word) {
                    prevWord = word; // 중복 방지를 위해 현재 단어 저장
                    babble = babble.slice(word.length); // 발음한 단어 제거
                    found = true;
                    break;
                }
            }
            if (!found) isValid = false; // 발음 가능한 단어를 못 찾으면 유효하지 않음
        }

        if (isValid && babble.length === 0) {
            answer++; // 조카가 발음 가능한 단어로 카운트
        }
    });

    return answer;
}
