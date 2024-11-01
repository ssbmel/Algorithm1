function solution(numbers) {
    let answer = [];
    //경우의 수 만큼 배열 안의 두개의 숫자를 더해 answer에 넣기 
    for(let i=0; i < numbers.length; i++){
        for(let j=i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    //중복되는거 제거하고
    //오름차순으로 담기
    return Array.from(new Set(answer)).sort((a,b)=> a-b);
}