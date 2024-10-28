function solution(n) {
    //n을 3진법으로 바꿔
    let ternary = n.toString(3);
    //3진법이 된걸 뒤집어 reverse
    let reternary = ternary.split("").reverse();
    let sum = reternary.join("")
    //reverse를 다시 10진법으로 바꿔
    let answer = parseInt(sum, 3)
    return answer;
}