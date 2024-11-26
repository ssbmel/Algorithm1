function solution(number, limit, power) {
    let answer = 0;

    // 1에서 number까지 각 숫자의 약수 개수 계산
    for (let i = 1; i <= number; i++) {
        let divisorCount = 0;

        // 약수 계산
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                divisorCount++; // 약수 하나 추가
                if (j !== i / j) {
                    divisorCount++; // 서로 다른 약수 추가
                }
            }
        }

        // 약수 개수가 limit 초과인지 확인
        if (divisorCount > limit) {
            answer += power; // 제한 초과 시 power 추가
        } else {
            answer += divisorCount; // 제한 내면 그대로 추가
        }
    }

    return answer; // 필요한 철의 총 무게
}
