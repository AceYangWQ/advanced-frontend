// 手写bind
// bind()方法会创建一个新函数，当这个函数被调用时，bind()的第一个参数将作为它运行时的this,之后的一序列参数将会在传递的实参前传入作为它的参数

// 第一版
Function.prototype.bind2 = function (context) {
  var self = this
  return function () {
    return self.apply(context)
  }
}

// var foo = {
//     value: 1
// }

// function bar() {
//     return this.value
// }

// var bindFoo = bar.bind2(foo)

// console.log(bindFoo())

// 第二版 传参的模拟实现
Function.prototype.bind2 = function (context) {
  var self = this
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1)

  return function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat(bindArgs))
  }
}

// var foo = {
//     value: 1
// }

// function bar(name, age) {
//     console.log(this.value)
//     console.log(name)
//     console.log(age)
// }

// var bindFoo = bar.bind2(foo, 'daisy')
// bindFoo(18)

// 第三版 构造函数效果的模拟实现
Function.prototype.bind2 = function (context) {
  var self = this
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1)

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    // console.log(this)
    // console.log(fBound)
    // console.log(self)
    // console.log(this instanceof fBound)
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    )
  }
  // 修改返回函数的prototype为绑定函数(bar)的prototype，实例就可以继承绑定函数(bar)的原型中的值
  // console.log(self.prototype)
  fBound.prototype = self.prototype
  return fBound
}

// var value = 2

// var foo = {
//     value: 1
// }

// function bar(name, age) {
//     this.habit = 'shopping'
//     console.log(this.value)
//     console.log(name)
//     console.log(age)
// }

// bar.prototype.friend = 'kevin'

// var bindFoo = bar.bind2(foo, 'daisy')

// var obj = new bindFoo('18')
// undefined
// daisy
// 18
// console.log(obj)
// console.log(obj.habit)
// console.log(obj.friend)
// shopping
// kevin

// 第三版弊端：fBound.prototype = self.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：
// 第四版 构造函数效果的优化实现
Function.prototype.bind2 = function (context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function () {}
  var fBound = function () {
    // console.log(this)
    // console.log(fNOP)
    // console.log(this instanceof fNOP)
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    )
  }
  fNOP.prototype = self.prototype
  console.log(fNOP.prototype)
  console.log(fBound.prototype)
  fBound.prototype = new fNOP()
  fBound.prototype.a = '123'
  return fBound
}

var value = 2

var foo = {
  value: 1
}

// 终版 调用 bind 的不是函数的处理
// if (typeof this !== "function") {
//     throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
// }
Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {
    throw new Error(
      'Function.prototype.bind - what is trying to be bound is not callable'
    )
  }
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function () {}
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    console.log(this)
    console.log(self)
    console.log(context)
    return self.apply(
      this instanceof fBound && context ? this : context,
      args.concat(bindArgs)
    )
  }
  fNOP.prototype = self.prototype
  fBound.prototype = new fNOP()
  return fBound
}

function bar(name, age) {
  this.habit = 'shopping'
  this.name = name
  this.age = age
}

bar.prototype.friend = 'kevin'

var bindFoo1 = bar.bind2(null, 'daisy')
var bindFoo2 = bar.bind2(foo, 'daisy')
var obj1 = new bindFoo1(18)
var obj2 = new bindFoo2(18)
console.log(obj1, obj2)
