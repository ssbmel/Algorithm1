function solution(t, p) {
    var answer = [];
    //t의 문자열을 하나하나 뿌셔
    let arrT = t.split("");
    let arrP = p.split("");
    // console.log(arr.slice(0,3).join(""));
    //뿌신 t를 0번째 인덱스부터 p의 길이만큼 뽑아
    for(let i=0; i < arrT.length; i++){
        let newArr = arrT.slice(i, i+arrP.length).join("");
        if(newArr.split("").length >= arrP.length && newArr <= p){
           answer.push(newArr)
        }
        
        
    }
    return answer.length;
    //뽑은 문자열들이 p보다 작거나 같은거 필터해
}