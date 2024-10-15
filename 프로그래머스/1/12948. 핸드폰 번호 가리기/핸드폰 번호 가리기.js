function solution(phone_number) {
    let arr = [...phone_number];
    let answer = [];
    for(let i=0; i<=arr.length-1; i++){
        if(i <= arr.length-5){
            let i = "*"
            answer += i
        }else{
        answer += arr[i]
        }
        
    }
    
    return answer;
}