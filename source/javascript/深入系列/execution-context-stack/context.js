// 顺序执行？
// 如果要问到 JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行，毕竟：
var foo = function () {
  console.log('foo1')
}
foo() // foo1

var foo = function () {
  console.log('foo2')
}
foo() // foo2

// 然而去看这段代码：
function foo() {
  console.log('foo1')
}
foo() // foo2
function foo() {
  console.log('foo2')
}
foo() // foo2
// 刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行的分析和执行程序，而是一段一段的分析执行，当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升

// 可执行代码
// 这就要说到 JavaScript 的可执行代码（executable code）的类型有哪些？ 其实很简单，就三种，全局代码、函数代码、eval代码

// 执行上下文栈
// 接下来问题来了，我们写的函数多了去了，如果管理创建的那么多执行上下文呢？所以 JavaScript 引擎创建了执行上下文栈（Execution context stack, ECS）来管理执行上下文
// 为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：
ECStack = []
// 试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候， ECStack 才会被清空，所以程序结束之前，ECStack 最底部永远有个 globalContext:
ECStack = [globalContext]

// 现在 JavaScript 遇到下面这段代码了：
function fun3() {
  console.log('fun3')
}
function fun2() {
  fun3()
}
function fun1() {
  fun2()
}
fun1()
// 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文栈从栈中弹出，知道了这样的工作原理，让我们来看看如何处理上面这段代码：

// 伪代码

// fun1()
// ECStack.push(<fun1> functionContext)

// fun1中竟然调用了 fun2, 还要创建 fun2 的执行上下文
// ECStack.push(<fun2> functionContext)

// 擦，fun2 还调用了 fun3 !
// ECStack.push(<fun3> functionContext)

// fun3执行完毕
// ECStack.pop()

// fun2执行完毕
// ECStack.pop()

// fun1执行完毕
// ECStack.pop()

// JavaScript 接着执行下面的代码，但是 ECStack 底层永远有个 globalContext

// 解答思考题
var scope = 'global scope'
function checkScope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
// console.log(checkScope()) // local scope

var scope = 'global scope'
function checkScope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
// console.log(checkScope()()) // local scope

// 两段代码执行结果一样，但是两段代码究竟有哪些不同呢？答案就是执行上下文栈的变化不一样

// 让我们模拟第一段代码：
// ECStack.push(<checkScope> funtionContext)
// ECStack.push(<f> funtionContext)
// ECStack.puop()
// ECStack.pop()

// 让我们模拟第二段代码：
// ECStack.push(<checkScope> funtionContext)
// ECStack.puop()
// ECStack.push(<f> funtionContext)
// ECStack.pop()
