// let arr;
// let baseNum = 2;
// const enterNum = 200;
// do {
//   console.log(baseNum > 1 && baseNum % baseNum);
//   if (baseNum > 1 && baseNum % baseNum) {
//     arr.push(n);
//     console.log("test");
//   }
//   baseNum++;
// } while (baseNum <= enterNum);
// console.log(arr);

let n = 34623463462;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
