function solution(d, budget) {
    let answer = 0; // 가능한 횟수
    let sum = 0; // 합산 예산
    
    // d를 오름차순으로 바꿔
    let arr = d.sort((a, b) => a - b);
    
    // d의 인덱스를 누적해서 더해
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        // budget보다 커지면 멈춰
        if (sum > budget) {
            break;
        }
        
        // budget보다 커지기 전까지는 지원 가능한 횟수를 증가시켜
        answer++;
    }

    // 횟수 반환
    return answer;
}
