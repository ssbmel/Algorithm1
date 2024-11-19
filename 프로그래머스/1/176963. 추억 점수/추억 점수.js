function solution(name, yearning, photo) {
    var answer = [];
    
    //name[i] = yearning[i]
    for (let group of photo) {
        let sum = 0;
        for (let person of group) {
            // 그룹 내 각 인물 이름을 순회
            let index = name.indexOf(person); // 이름이 name에 있는지 확인
            if (index !== -1) {
                sum += yearning[index]; // 있으면 대응되는 점수 더하기
            }
        }
        answer.push(sum);
    }

    return answer;
}
