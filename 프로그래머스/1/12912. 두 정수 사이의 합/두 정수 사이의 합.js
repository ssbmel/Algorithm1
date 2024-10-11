function solution(a, b) {
    let sum = 0;
    
    // a와 b가 같으면 0 반환
    if (a === b) {
        sum = 0;
    }
    
    // a가 더 클 경우, a와 b를 swap
    if (a > b) {
        [a, b] = [b, a];
    }
    
    // a와 b 사이의 모든 수를 더함
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}
