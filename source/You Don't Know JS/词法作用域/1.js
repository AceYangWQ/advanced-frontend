function foo() {
    // 词法作用域是在写代码或者说定义时确定的，而动态作用域是在运行时确定的。
    // 词法作用域关注函数在何处声明，而动态作用域关注函数从何处调用
    console.log(a) // 2
}

function bar() {
    var a = 3
    foo()
}

var a = 2
bar()