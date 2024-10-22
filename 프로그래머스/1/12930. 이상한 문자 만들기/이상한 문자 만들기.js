function solution(s) {
    let answer = [];
    let words = s.split(" "); // 공백 기준으로 문자열을 단어별로 나누기
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split(""); // 각 단어를 문자 배열로 나누기
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                word[j] = word[j].toUpperCase(); // 짝수 인덱스 대문자 변환
            } else {
                word[j] = word[j].toLowerCase(); // 홀수 인덱스 소문자 변환
            }
        }
        answer.push(word.join("")); // 변환된 단어를 다시 문자열로 합치기
    }
    
    return answer.join(" "); // 변환된 단어들을 공백을 포함한 문자열로 합치기
}