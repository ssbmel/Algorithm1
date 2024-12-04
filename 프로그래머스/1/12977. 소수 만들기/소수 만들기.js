function solution(nums) {
    let answer = 0;

    // 소수 판별 함수
    const isPrime = (num) => {
        if (num < 2) return false; // 2보다 작은 경우 소수가 아님
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // 약수가 있으면 소수가 아님
        }
        return true; // 약수가 없으면 소수
    };

    // nums 배열에서 서로 다른 3개를 선택해 합을 계산
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                // 합이 소수라면 카운트 증가
                if (isPrime(sum)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}
