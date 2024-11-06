function solution(strings, n) {
    return strings.sort((a, b) => {
        // n번째 글자가 다르면 n번째 글자를 기준으로 정렬
        if (a[n] !== b[n]) {
            return a[n].localeCompare(b[n]);
        }
        // n번째 글자가 같으면 전체 문자열을 기준으로 정렬
        return a.localeCompare(b);
    });
}
