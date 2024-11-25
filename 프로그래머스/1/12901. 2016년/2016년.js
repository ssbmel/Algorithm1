function solution(a, b) {
  // 요일 배열 (0: SUN, 1: MON, ..., 6: SAT)
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // 2016년 a월 b일의 Date 객체 생성
  const date = new Date(2016, a - 1, b);
  
  // 해당 날짜의 요일 (0 ~ 6)
  const dayIndex = date.getDay();
  
  // 요일 반환
  return days[dayIndex];
}
