Array.prototype.myReduce = function (callback, init) {
  let arr = this.slice(0)
  // arr = [ function div2(x) { return x / 2 }, function mul3(x) { return x * 2 }, function add1(x) { return x + 1 }, function add1(x) { return x + 1 }]
  let result = init
  for (let i = 0; i < arr.length; i++) {
    if (init === undefined && i === 0) {
      result = arr[0]
      let item = arr[1],
        index = 1
      if (!item) return result

      // callback函数

      // callback = (a, b) => {
      //   return function (...args) {
      //     return a(b(...args))
      //   }
      // }

      // result为callback函数执行返回的结果

      // result = function (...args) {
      //   return div2(mul3(...args))
      // }

      result = callback(result, item, index)
      i++
      continue
    }
    let item = arr[i],
      index = i

    //第二轮callback函数执行

    // result = function (...args) {
    //   return function (...add1(...args)) {
    //     return div2(mul3(...args))
    //   }
    // }

    //第三轮callback函数执行

    // result = function (...args) {
    //   return function(...add1(...args)) {
    //     return function(...add1(...args)) {
    //       return div2(mul3(...args))
    //     }
    //   }
    // }
    result = callback(result, item, index)
  }
  return result
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  // return funcs.reduce(
  //   (a, b) =>
  //     (...args) =>
  //       a(b(...args))
  // )
  return funcs.myReduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2

let operate = compose(div2, mul3, add1, add1)
console.log(operate(0)) // 3

// operate = compose()
// console.log(operate(0)) // 0

// operate = compose(add1)
// console.log(operate(0)) // 1

/*
  在函数式编程当中有一个很重要的概念就是函数组合， 实际上就是把处理数据的函数像管道一样连接起来， 然后让数据穿过管道得到最终的结果。 例如：
  const add1 = (x) => x + 1;
  const mul3 = (x) => x * 3;
  const div2 = (x) => x / 2;
  div2(mul3(add1(add1(0)))); //=>3
​
  而这样的写法可读性明显太差了，我们可以构建一个compose函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后compose返回的也是一个函数，达到以下的效果：
  const operate = compose(div2, mul3, add1, add1)
  operate(0) //=>相当于div2(mul3(add1(add1(0))))
  operate(2) //=>相当于div2(mul3(add1(add1(2))))
​
  简而言之：compose可以把类似于f(g(h(x)))这种写法简化成compose(f, g, h)(x)，请你完成 compose函数的编写
*/

// function compose(...funcs) {
//   // funcs 存储的是最后需要处理的函数集合
//   // 返回一个函数
//   return function (x) {
//     if (funcs.length === 0) {
//       return x
//     }
//     if (funcs.length === 1) {
//       return funcs[0](x)
//     }
//     let first = funcs[funcs.length - 1](x)
//     funcs.pop()
//     return funcs.reduceRight((previousValue, currentValue) => {
//       return currentValue(previousValue)
//     }, first)
//   }
// }
