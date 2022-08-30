
// ES5 全局作用域 和 函数作用域

// ES6 增加块作用域

// let and const

function letTest() {

}
for(let i = 0; i < 3; i++ ){
    console.log(i)
}
// console.log(i)

letTest()


function constTest() {
    // 声明就要赋值
    const PI = 3.1415926
    console.log(PI)

    // 存储的是obj的地址 只要地址不变 obj属性或者方法可以改变
    const obj = {
        a: 1
    }

    obj.b = 2
    console.log(obj)
}

constTest()
