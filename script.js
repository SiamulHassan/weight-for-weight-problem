"use strict";
//:::::::::::Weight for Weight
//////////////////////////////////////////////////////////////////
// ata solve korar jonno je topic jante hobe segulo niche explain kora hoise
//////////////////////////////////////////////////////////////////
let str = "56 65 74 100 99 68 86 180 90";
function sumOfParts(num) {
  console.log("which:", num);
  num.split("").reduce((acc, currVal) => parseInt(acc) + parseInt(currVal), 0);
}
function orderWeight(string) {
  return string
    .split(" ")
    .sort()
    .sort((a, b) => sumOfParts(a) - sumOfParts(b))
    .join(" ");
}
orderWeight(str);

// topics you need to know

// const arr = [10, 20, 8, 5, 24];
// const total = arr.reduce((acc, curr) => acc + curr, 0);
// how accumulator works behind the scene
// 0
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 8 = 38
// 38 + 5 = 43
// 43 + 24 = 67
// console.log(total);

///////////////////// sort basics
// const arr2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const arr2 = [10, 20, 8, 5, 24];
// const arr2 = ["rony", "akram", "siam", "dddd", "bbb"];
// console.log(arr2.sort());
// ...... choto - boro //// alphabetic
// return < 0 === -1 === A, B
// return > 0 === 1 === B, A
// return === 0 ...real order
// console.log(
//   arr2.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//   })
// );
// a - b..... a > b...... 1
