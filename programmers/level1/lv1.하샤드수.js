function solution(x) {
  let sum = 0;
  let temp = x;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  if (x % sum === 0) {
    return true;
  }

  return false;
}

console.log(solution(12));
