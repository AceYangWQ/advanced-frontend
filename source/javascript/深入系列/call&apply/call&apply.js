/** @format */

// "use strict"

// 手写 call

// 第一版
Function.prototype.call2 = function (context) {
  context.fn = this
  context.fn()
  delete context.fn
}

// 第二版 有参数
Function.prototype.call2 = function (context) {
  context.fn = this
  var args = []
  // i 从1开始，因为 arguments[0] 为 context
  for (var i = 1, len = arguments.length; i < len; i++) {
    // 得到 ['arguments[1]', 'arguments[2]',...] 这种格式
    args.push('arguments[' + i + ']')
  }
  // eval执行 这里 args 会自动调用 Array.toString() 这个方法
  eval('context.fn(' + args + ')')
  delete context.fn
}

// 第三版 this 参数可以为 null ,当为 null 的时候，非严格模式指向 window , 同时函数也可以有返回值的
Function.prototype.call2 = function (context) {
  context = context
  context.fn = this
  var args = [],
    result = null
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }
  result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

function print(name) {
  this.name = name
  console.log(this, this.age)
}

var obj = {
  age: 28,
  gender: 'male'
}

// print.call2(obj, 'aceYang')

// 手写 apply

// 第一版
Function.prototype.apply2 = function (context) {
  context.fn = this
  context.fn()
  delete context.fn
}

// 第二版 有参数
Function.prototype.apply2 = function (context, arr) {
  context.fn = this
  var args = []
  for (var i = 0, len = arr.length; i < len; i++) {
    args.push('arr[' + i + ']')
  }
  eval('context.fn(' + args + ')')
  delete context.fn
}

// 第三版 this 参数可以为 null ,当为 null 的时候，非严格模式指向 window , 同时函数也可以有返回值的
Function.prototype.apply2 = function (context, arr) {
  context = context || window
  context.fn = this
  var args = [],
    result = null
  if (!arr) {
    result = context.fn()
  } else {
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}

function print2(name, gender) {
  console.log(this.age, name, gender)
}

var obj2 = {
  age: 28
}

// print2.apply2(obj2, ['AceYang', 'male'])

// 注意：就是当 this 参数值为原始值（数字，字符串，布尔值）的时候 this 会指向该原始值的自动包装对象
