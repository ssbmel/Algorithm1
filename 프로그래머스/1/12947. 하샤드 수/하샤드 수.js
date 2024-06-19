function solution(x) {
    // x의 모든 자릿수 합 구하기
    let str = x.toString();
    let sum = str.split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    // 합한 값을 x로 나누기
    // 나머지가 0이면 하샤드 수
    if(x % sum === 0) {
        return true;
    }else 
        return false;

}