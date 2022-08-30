/*
基本数据类型（原始值类型）
  + number   特殊 NaN/Infinity
  + string   单引号/双引号/反引号``
  + boolean  true/false
  + null 
  + undefined
  + symbol   创建唯一值
  + bigint

引用数据类型
 + object
  + {} 普通对象
  + [] 数组对象
  + /^\d+$/ 正则对象
  + 日期对象
  + ...
  + function
*/

// NaN: not a number 不是一个有效数字，但是它属于number数据类型的
// console.log(typeof NaN) // "number"
// console.log(NaN === NaN) // false
// let n = 10
// if (isNaN(n)) {
//   // 条件成立： 证明是非有效数字
// }

// Object.is(val1, val2) // 检测两个值是否相等
// NaN特殊
// console.log(Object.is(NaN, NaN)) // true

// 唯一值
// let val = Symbol('00');
// console.log(val === val) // true
// console.log(Symbol('AA') == Symbol('AA')) // false
// let a = NaN;
// console.log(a === a) // false

// console.log(Number.MAX_SAFE_INTEGER) //jsz中的最大安全数字

// let res = parseFloat('left:200px') // NaN
// if (res === 200) {
//   alert(200)
// } else if (res === NaN) {
//   alert(NaN)
// } else if (typeof res === 'number') {
//   alert('number')
// } else {
//   alert('Invalid Number')
// }

// ========= 为啥分成两大类型，两种类型有啥区别？

/*
 *JS代码可以运行的环境：
  + 浏览器
  + Node.js
  + webview
*/

// var a = 12
// var b = a
// b = 13
// console.log(a) // 12

// var a = {
//   n: 12
// }
// var b = a
// b.n = 13
// console.log(a.n) // 13

// var a = {
//   n: 12
// }
// var b = a
// b = {
//   n: 13
// }
// console.log(a.n) // 12

// var a = {
//   n: 1
// }
// var b = a
// // 如果连续赋值 a = b = 10 先进行右侧赋值
// // 但是成员访问赋值优先级高（19）所以成员访问先进行赋值操作
// a.x = a = {
//   n: 2
// }
// console.log(a.x) // undefined
// console.log(b) // { n: 1, x: { n: 2 } }

//
// obj['name'] 获取成员为name的属性值
// obj[name] 把name变量存储的值作为成员获取其属性值
// 对象的属性名
// + 字符串
// + Symbol
// + 对于普通对象来讲，属性名不能是引用数据类型值，设置为对象，也会转换为字符串，
//   ES6中新增Map数据结构，这个结构中可以允许属性名是一个对象

// var a = {},
//   b = '0',
//   c = 0
// a[b] = '珠峰'
// a[c] = '培训'
// console.log(a[b]) // '培训'

// var a = {},
//   b = Symbol('1'),
//   c = Symbol('1')
// a[b] = '珠峰'
// a[c] = '培训'
// console.log(a[b]) // '珠峰'

// var a = {},
//   b = { n: '1' },
//   c = { m: '2' }
// a[b] = '珠峰'
// a[c] = '培训'
// console.log(a[b]) // '培训'

// 在全局上下文中，基于 var/function 声明的全局变量，
// 也会给GO(window)中新增一个对应的私有属性，并且和全局的变量有
// 映射机制，一个修改，另一个也会跟着修改

// var a = 10
// console.log(a) // 10
// console.log(window.a) // 10
// window.a = 20
// console.log(a) // 20

// let/const 声明的变量和Window没有关系
// let a = 10
// console.log(a) // 10
// console.log(window.a) // undefined

// a = 20 // 直接在window下创建一个a属性，值为20
