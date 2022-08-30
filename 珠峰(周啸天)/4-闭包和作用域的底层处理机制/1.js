// let x = 5
// function fn(x) {
//   return function (y) {
//     console.log(y + ++x)
//   }
// }
// let f = fn(6)
// f(7) // 7 + ++6  // 14
// fn(8)(9) // 9 + ++8  // 18
// f(10) // 10 + ++7 18
// console.log(x) // 5

// let x = 5
// function fn() {
//   return function (y) {
//     console.log(y + ++x)
//   }
// }
// let f = fn(6)
// f(7) // 7 + ++5  // 13
// fn(8)(9) // 9 + ++6 // 16
// f(10) // 10 + ++7 18
// console.log(x) // 8

let a = 0,
  b = 0
function A(a) {
  A = function (b) {
    alert(a + b++)
  }
  alert(a++)
}
A(1) // 1
A(2) // 4
