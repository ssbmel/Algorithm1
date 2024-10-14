function solution(absolutes, signs) {
    let plusN = 0;
    let minusN = 0;
    for(let i=0; i <= absolutes.length-1; i++){
        if(signs[i] === true) {
            plusN += absolutes[i];
        }else {
            plusN -= absolutes[i];
        }
        answer = plusN;
    }
    return answer;
}