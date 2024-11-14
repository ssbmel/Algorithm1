function solution(n, arr1, arr2) {
    const answer = [];

    for (let i = 0; i < n; i++) {
        // arr1[i]와 arr2[i]를 OR 연산하여 겹쳐진 결과를 얻는다.
        const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        
        // 이진수 문자열에서 1이면 "#"을, 0이면 " "을 추가한다.
        const line = binary.replace(/1/g, '#').replace(/0/g, ' ');
        
        // 결과를 answer 배열에 추가한다.
        answer.push(line);
    }

    return answer;
}
