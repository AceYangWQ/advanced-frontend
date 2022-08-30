// 1.
// var num = 10
// var obj = {
//   num: 20
// }
// obj.fn = (function (num) {
//   this.num = num * 3
//   num++
//   return function (n) {
//     console.log(this)
//     this.num += n
//     num++
//     console.log(num)
//   }
// })(obj.num)
// var fn = obj.fn // 全局num = 20 * 3 = 60 局部 num 21
// fn(5) // 全局num 65 局部 22
// obj.fn(10) // obj num 30 局部 23
// console.log(num, obj.num) // 65 30

// 2.
// let obj = {
//   fn: (function () {
//     return function () {
//       console.log(this)
//     }
//   })()
// }
// obj.fn() // obj
// let fn = obj.fn
// fn() // window

// // 3
// var fullName = 'language'
// var obj = {
//   fullName: 'javascript',
//   prop: {
//     getFullName: function () {
//       return this.fullName
//     }
//   }
// }
// console.log(obj.prop.getFullName()) // undefined
// var test = obj.prop.getFullName
// console.log(test()) // 'language'

// 4.
// var name = 'window'
// var Tom = {
//   name: 'Tom',
//   show: function () {
//     console.log(this.name)
//   },
//   wait: function () {
//     var fun = this.show
//     fun()
//   }
// }
// Tom.wait() // window

// 5.
// window.val = 1
// var json = {
//   val: 10, // 20
//   dbl: function () {
//     this.val *= 2
//   }
// }
// json.dbl()
// var dbl = json.dbl
// dbl() // window.val = 2
// json.dbl.call(window) // window.val = 4
// alert(window.val + json.val) // 24

// 6.
// ;(function () {
//   var val = 1
//   var json = {
//     val: 10,
//     dbl: function () {
//       val *= 2
//     }
//   }
//   json.dbl()
//   alert(json.val + val) // 12
// })()
