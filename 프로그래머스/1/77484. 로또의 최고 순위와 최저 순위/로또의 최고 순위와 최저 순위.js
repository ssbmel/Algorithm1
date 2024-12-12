function solution(lottos, win_nums) {
    // 0의 개수와 일치하는 숫자 개수 계산
    const zeroCount = lottos.filter(num => num === 0).length;
    const matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    // 순위를 계산하는 함수 없이 직접 순위 매기기
    const getRank = (count) => (count >= 2 ? 7 - count : 6);

    // 최고 순위와 최저 순위 계산
    const maxRank = getRank(matchCount + zeroCount);
    const minRank = getRank(matchCount);

    return [maxRank, minRank];
}
