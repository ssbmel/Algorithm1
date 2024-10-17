function solution(left, right) {
    let answer = 0;
    
    // left부터 right까지 반복해서 개수 찾기
    for(let j = left; j <= right; j++){
        let count = 0;

        for(let i = 1; i <= j; i++){
            if(j % i === 0) {
                count++;
            }
        }
        
        // 약수의 개수가 짝수면 더하고, 홀수면 뺍니다.
        if(count % 2 === 0) {
            answer += j;
        } else {
            answer -= j;
        }
    }
    
    return answer;
}
