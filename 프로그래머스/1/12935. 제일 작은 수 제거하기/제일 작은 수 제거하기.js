function solution(arr) {
    let answer = [];
    for(let i=0; i<=arr.length-1; i++){
        for(let j=1; j<=arr.length-1; j++){
            if(i!==j && arr[i] > arr[j]) {
                answer.push(arr[i]);
                break
            }
        }
    }
    return answer.length > 1 ? answer : [-1]
}