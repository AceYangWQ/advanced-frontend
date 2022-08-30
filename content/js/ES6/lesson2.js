// 变量的解构赋值

    // 数组解构 对象解构 字符串解构 数值解构 布尔值解构 函数参数的解构

{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b); // 1 2
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest); // 1  2  [3, 4, 5, 6]
}

{
    let a, b;
    ({a, b} = {a: 1, b: 2})
    console.log(a, b); // 1 2
}

{
    let a, b, c, rest;
    [a, b, c] = [1, 2]; // 无默认值
    console.log(a, b, c); // 1 2 undefined
    [a, b, c = 3] = [1, 2]; // 有默认值
    console.log(a, b, c); // 1 2 3
}

{
    let a = 1;
    let b = 2;
    [a, b] = [b, a]; // 交换两个变量的值
    console.log(a, b); // 2 1
}

{
    function f() {
        return [1, 2]
    }

    let a, b;
    [a, b] = f();
    console.log(a, b); // 1 2
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }

    let a, b, c;
    [a, , , b] = f();
    console.log(a, b); // 1 4
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }

    let a, b, c;
    [a, , ...b] = f();
    console.log(a, b); // 1  [3, 4, 5]
}

{
    let obj = {p: 42, q: true};
    let {p, q} = obj;
    console.log(p, q); // 42 true
}

{
    let {a = 10, b = 5} = {a: 3}; // 覆盖默认值
    console.log(a, b); // 3 5
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title: esTitle, test: [{title: cnTitle}]} = metaData;
    console.log(esTitle, cnTitle); // abc test
}
