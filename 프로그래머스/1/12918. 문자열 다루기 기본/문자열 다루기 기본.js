function solution(s) {
    let answer = false;
    
    // s가 숫자로만 이루어져 있고, 길이가 4 또는 6인지 확인
    if (!isNaN(s) && s.length === 4 || s.length === 6) {
        // 숫자로만 이루어져 있는지 확인
        if (/^\d+$/.test(s)) {
            answer = true;
        }
    }

    return answer;
}
