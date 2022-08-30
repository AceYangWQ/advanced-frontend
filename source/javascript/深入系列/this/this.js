// this是 JavaScript 语言的一个关键字。
// 它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。
// 函数的不同使用场合，this有不同的值。总的来说，this就是函数运行时所在的环境对象。下面分几种情况，详细讨论this的用法。



// 情况一： 纯粹的函数调用
// 函数的最通常用法，属于全局性调用，因此this就代表全局对象
// var x = 1
// function test() {
//     console.log(this.x) 
// }
// test() // 1



// 情况二：作为对象方法的调用
// 函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
// function test() {
//     console.log(this.x)
// }
// var obj = {}
// obj.x = 1
// obj.m = test
// obj.m()  // 1



// 情况三：作为构造函数调用
// 所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象。
// function test() {
//     this.x = 1
// }
// var obj = new test()
// obj.x // 1

// 为了表明这时this不是全局对象，我们对代码做一些改变
// var x = 2
// function test() {
//     this.x = 1
// }
// var obj = new test()
// console.log(x) // 2



// 情况四：call、apply、bind调用
// call()、apply()、bind()是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数
// var x = 0
// function test() {
//     console.log(this.x)
// }
// var obj = {}
// obj.x = 1
// obj.m = test
// obj.m.apply() // 0
// apply()的参数为空时，默认调用全局对象（非严格模式下）。因此，这时的运行结果为0，证明this指的是全局对象。

// 如果把最后一行代码修改为
// obj.m.apply(obj); // 1



// 情况五：箭头函数调用
// 众所周知，ES6 的箭头函数是可以避免 ES5 中使用 this 的坑的。箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。
// var name = 'windowsName'
// var a = {
//     name: 'innerName',
//     func1: function () {
//         console.log(this.name)
//     },
//     func2: function () {
//         setTimeout(() => {
//             this.func1()
//         })
//     }
// }
// a.func2() // innerName