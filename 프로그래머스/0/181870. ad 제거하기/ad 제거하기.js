function solution(strArr) {
    // ad 포함한 부분 문자열 제거하기
    // 남은 문자열 순서 유지 배열로 리턴
    
    let deleteAdStr = strArr.filter(str=> !str.includes("ad"));
    return deleteAdStr

}