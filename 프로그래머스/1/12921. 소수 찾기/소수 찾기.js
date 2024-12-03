function solution(n) {
    // 0부터 n까지 소수 여부를 판별하기 위한 배열 생성
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    // 2부터 √n까지의 수로 소수를 판별
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            // i의 배수는 소수가 아님
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 소수의 개수를 반환
    return isPrime.filter(value => value).length;
}
