function solution(a, b, n) {
    let total = 0;
    
    while (n >= a) {
        // 받을 수 있는 콜라 수 (정수 나눗셈으로 계산)
        const newCola = Math.floor(n / a) * b;
        // 받은 콜라 수 총합
        total += newCola;
        // 남은 콜라병 + 교환하고 남은 병
        n = newCola + (n % a);
    }
    return total;
}
