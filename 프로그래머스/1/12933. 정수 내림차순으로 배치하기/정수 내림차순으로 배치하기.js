function solution(n) {
    let str = n.toString().split("").sort(function(a, b){
                                          return b - a});
    let answer = Number(str.join(""));
    return answer;
};