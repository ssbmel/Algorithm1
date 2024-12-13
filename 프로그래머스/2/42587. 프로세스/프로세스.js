function solution(priorities, location) {
    let answer = 0;
    
    // priorities 배열의 각 프로세스에 대해 { priority, index } 형태로 객체 배열을 만듦
    // 이렇게 하면 우선순위와 해당 프로세스의 원래 위치를 추적할 수 있음
    const queue = priorities.map((priority, index) => ({ priority, index }));
       
    // 큐에 프로세스가 남아 있는 동안 반복
    while (queue.length > 0) {
        // 큐의 첫 번째 프로세스를 꺼냄
        const current = queue.shift();

        // 큐에 남아 있는 프로세스 중에서 더 높은 우선순위가 있는지 확인
        if (queue.some(item => item.priority > current.priority)) {
            // item이 더 크면 current를 queue 맨 뒤로 보냄
            queue.push(current);
        } else {
            // current가 더 크면 카운트
            answer++;
            // 실행되는 순서가 location과 일치하면 해당 순서를 반환
            if (current.index === location) {
                return answer; 
            }
        }
    }
}
