function solution(k, score) {
    let list = []; // 명예의 전당 리스트
    let answer = [];

    for (let s of score) {
        list.push(s); // 현재 가수의 점수 추가
        list.sort((a, b) => b - a); // 내림차순 정렬
        if (list.length > k) {
            list.pop(); // k개 초과 시 가장 낮은 점수 제거
        }
        answer.push(list[list.length - 1]); // 최하위 점수 저장
    }

    return answer;
}
