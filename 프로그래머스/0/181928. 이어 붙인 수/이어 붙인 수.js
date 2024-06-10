function solution(num_list) {
    const [a, b] = num_list.reduce((acc, cur) => {
        if(cur%2 === 0){
            return [acc[0] + cur, acc[1]]
        }else{
            return [acc[0], acc[1]+cur]
        }
    }, ['',''])
    return +a + +b
}

