process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.trim().split(' ').map(Number);  // 입력된 값을 정수로 변환하여 n과 m에 할당
    const row = '*'.repeat(n);  // 가로 길이 n만큼의 별을 출력할 문자열 생성
    
    for (let i = 0; i < m; i++) {  // 세로 길이 m만큼 줄을 출력
        console.log(row);
    }
});

