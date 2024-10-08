function solution(n) {
    let arr = n.toString().split("").reverse();
    let answer = arr.map(Number);
    return answer;
}