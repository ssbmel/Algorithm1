function solution(s) {
    var answer = [];
    let str = s.split("");
    
    for (let i = 0; i < str.length; i++) {
        // 현재 문자가 처음 등장하는 경우
        if (s.indexOf(str[i]) === i) {
            answer.push(-1);
        } else {
            // 이미 등장한 경우, 현재 위치와 첫 등장 위치의 차이 저장
            answer.push(i - s.lastIndexOf(str[i], i - 1));
        }
    }
    return answer;
}
