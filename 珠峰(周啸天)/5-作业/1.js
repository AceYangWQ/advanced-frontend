// 一、变量提升的作业

// 1.
// console.log(a, b, c) // undefined, undefined, undefined
// var a = 12,
//   b = 13,
//   c = 14
// function fn(a) {
//   console.log(a, b, c) // 10, 13, 14
//   a = 100
//   c = 200
//   console.log(a, b, c) // 100, 13, 200
// }
// b = fn(10) // undefined
// console.log(a, b, c) // 12, undefined, 200

// 2.
// var i = 0
// function A() {
//   var i = 10
//   function x() {
//     console.log(i)
//   }
//   return x
// }
// var y = A()
// y() // 10
// function B() {
//   var i = 20
//   y()
// }
// B() // 10

// 3.
// var a = 1
// var obj = {
//   name: 'tom'
// }
// function fn() {
//   var a2 = a
//   obj2 = obj
//   a2 = a
//   obj2.name = 'jack'
// }
// fn()
// console.log(a) // 1
// console.log(obj) // { name: 'jack' }

// 4.
// var a = 1
// function fn(a) {
//   console.log(a) //  function a() {}
//   var a = 2
//   function a() {}
//   console.log(a) // 2
// }
// fn(a)
// console.log(a) // 1

// 5.
// console.log(a) // undefined
// var a = 12
// function fn() {
//   console.log(a) // undefined
//   var a = 13
// }
// fn()
// console.log(a) // 12
// ------
// console.log(a) // undefined
// var a = 12
// function fn() {
//   console.log(a) // 12
//   a = 13
// }
// fn()
// console.log(a) // 13
// ------
// console.log(a) // 报错：ReferenceError: a is not defined
// a = 12
// function fn() {
//   console.log(a)
//   a = 13
// }
// fn()
// console.log(a)

// 6.
// var foo = 'hello'
// ;(function (foo) {
//   console.log(foo) // hello
//   var foo = foo || 'world'
//   console.log(foo) // hell0
// })(foo)
// console.log(foo) // hello

// 7.
// {
//   function foo() {}
//   foo = 1
// }
// console.log(foo) // function foo() {}
// ----
// {
//   function foo(n) {}
//   foo = 1
//   function foo(m) {}
// }
// console.log(foo) // 1
// ----
// {
//   function foo() {}
//   foo = 1
//   function foo() {}
//   foo = 2
// }
// console.log(foo) // 1

// 8.
// var x = 1
// function func(
//   x,
//   y = function anonymous() {
//     x = 2
//   }
// ) {
//   x = 3
//   y()
//   console.log(x) // 2
// }
// func(5)
// console.log(x) // 1
// ------
// var x = 1
// function func(
//   x,
//   y = function anonymous() {
//     x = 2
//   }
// ) {
//   var x = 3
//   y()
//   console.log(x) // 3
// }
// func(5)
// console.log(x) // 1
// -----
// var x = 1
// function func(
//   x,
//   y = function anonymous1() {
//     x = 2
//   }
// ) {
//   var x = 3
//   var y = function anonymous2() {
//     x = 4
//   }
//   y()
//   console.log(x) // 4
// }
// func(5)
// console.log(x) // 1
