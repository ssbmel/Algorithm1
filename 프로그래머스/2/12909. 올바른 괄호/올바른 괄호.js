function solution(s){
    const answer = [];
    for(let i=0; i < s.length; i++){
        if(s[i] === "("){
            answer.push("(")
        }else if(s[i] === ")") {
            if(answer.length === 0){
                return false
            }answer.pop()
        }
    }
    return answer.length === 0 ? true : false;
}