function solution(s) {
    //s의 string 하나씩 분리하기
    //내림차순으로 정렬
    //대문자 < 소문자
    //다시 붙이기
    let strArr = s.split('');
    const newArr = strArr.sort((a, b)=>a > b ? -1 : 1);
    return sumArr = newArr.join('');
        console.log(sumArr);
}