var MyModules = (function Manager() {
    var modules = {}
    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]]
        }
        // 这是这段代码的核心，为了模块的定义引入了包装函数（可以传入任何依赖），并且将返回值，也就是模块的API储存在一个根据名字来管理的模块列表中
        // apply的第二个参数是数组形式
        modules[name] = impl.apply(impl, deps)
    }
    function get(name) {
        return modules[name]
    }
    return {
        define: define,
        get: get
    }
})()
MyModules.define('bar', [], function () {
    function hello(who) {
        return 'Let me introduce: ' + who
    }
    return {
        hello: hello
    }
})
MyModules.define('foo', ['bar', 'bar1'], function (bar) {
    var hungry = 'hippo'
    function awesome() {
        console.log(bar.hello(hungry).toUpperCase())
    }
    return {
        awesome: awesome
    }
})
var bar = MyModules.get('bar')
var foo = MyModules.get('foo')
console.log(bar.hello('hippo'))
foo.awesome()