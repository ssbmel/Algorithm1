function solution(seoul) {
    for(let i=0; i<=seoul.length; i++) {
        if(seoul.includes("Kim", i) === true){
            answer = "김서방은 " + i + "에 있다";
        }
    }
    return answer;
}