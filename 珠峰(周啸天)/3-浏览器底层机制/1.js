// 堆（Heap）栈（Stack）内存
// ECStack(Execution Context Stack) 和 EC（Execution Context）
// GO（Global Object）
// VO (Variable Object)
// AO （Activation Object）

// 栈中 var a = 12 是如何操作的？
// 1、创建一个值
// 2、创建一个变量
// 3、让变量和值关联在一起

// 对象创建
// 1、创建一个堆内存
// 2、把键值对存储到堆内存中
// 3、堆内存地址放到栈中，供变量调用

// {} + 0
// 大括号在js中太特殊了: 对象、代码块（块级作用域）

// 创建函数的时候，就定义了函数的作用域 => 当前创建函数所在的上下文  [[scope]]作用域

// 变量提升
// fn() // 5
// function fn() {
//   console.log(1)
// }
// fn() // 5
// function fn() {
//   console.log(2)
// }
// fn() // 5
// var fn = function () {
//   console.log(3)
// }
// fn() // 3
// function fn() {
//   console.log(4)
// }
// fn() // 3
// function fn() {
//   console.log(5)
// }
// fn() // 3

// var foo = 1
// function bar() {
//   if (!foo) {
//     var foo = 10
//   }
//   console.log(foo) // 10
// }
// bar()

// console.log(fn) // undefined
// if (1 == 1) {
//   console.log(fn) // function fn() { console.log('ok') }
//   function fn() {
//     // 既被全局提升一次，也被私有上下文提升一次
//     // 判断体大括号中出现了function，此时会形成一个全新的私有上下文
//     // 代码执行到这时候，会做一个特殊的处理：把当前这一行代码之前对fn的操作都映射给全局一份 之后的代码都只是操作私有的，和全局的fn没有任何关系了
//     console.log('ok')
//   }
//   fn = 12
//   console.log(fn) // 12
// }
// console.log(fn) // function fn() { console.log('ok') }
