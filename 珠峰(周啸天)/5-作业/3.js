// 三、闭包作用域的作业

// 1.
// var a = 10,
//   b = 11,
//   c = 12
// function test(a) {
//   a = 1
//   var b = 2
//   c = 3
// }
// test(10)
// console.log(a, b, c) // 10, 11, 3

// 2.
// var a = 4
// function b(x, y, a) {
//   console.log(a) // 3
//   arguments[2] = 10
//   console.log(a) // 10
// }
// a = b(1, 2, 3)
// console.log(a) // undefined

// 3.
// /**
//  * EC(G)
//  *  a ------ 9 / 0 / 1 / 0 / 1
//  *  fn ------ AAAFFF000
//  *  f ------ AAAFFF001
//  *  [[scope]]: EC(G)
//  */
// var a = 9
// function fn() {
//   /**
//    * EC(FN)
//    *  [[scope]]: <EC(FN), EC(G)>
//    */
//   a = 0
//   return function (b) {
//     /**
//      * EC(f1)
//      * b  --- 5
//      * [[scope]]: <EC(f1), EC(FN)>
//      */
//     return b + a++
//   }
// }
// var f = fn()
// console.log(f(5)) // 5
// console.log(fn()(5)) // 5
// console.log(f(5)) // 6
// console.log(a) // 2

// 4.
// var test = (function (i) {
//   return function () {
//     console.log((i *= 2)) // 4
//   }
// })(2)
// test(5)

// 5.
// var x = 4 // / 3 / 2 / 1
// function func() {
//   return function (y) {
//     console.log(y + --x)
//   }
// }
// var f = func(5)
// f(6) // 6 + 3 = 9
// func(7)(8) // 8 + 2 = 10
// f(9) // 9 + 1 = 10
// console.log(x) // 1

// 6.
// var x = 5,
//   y = 6
// function func() {
//   x += y
//   func = function (y) {
//     console.log(y + --x) // 13
//   }
//   console.log(x, y) // 11 6
// }
// func(4)
// func(3)
// console.log(x, y) // 10 6

// // 7.
// function fun(n, o) {
//   console.log(o)
//   return {
//     fun: function (m) {
//       return fun(m, n)
//     }
//   }
// }
// var c = fun(0).fun(1) // undefined  // 0
// c.fun(2) // 1
// c.fun(3) // 1

// 10.
// var b = 10
// ;(function b() {
//   b = 20
//   console.log(b) // 函数b
// })()
// console.log(b) // 10

// var b = 10
// ;(function b() {
//   var b = 20
//   console.log(b) // 20
// })()
// console.log(b) // 10

// 匿名函数具名化
// 1.设置的名字只能在函数的内部使用，外部是无法使用的
// 2.在函数内部去修改这个名字值，默认是不能修改的，代表的依然是函数本身（除非这个函数名字在函数体中被重新声明过，重新声明后，按照重新声明的为主）
