// 前言(类型判断上)
// 类型判断在 web 开发中有非常广泛的应用，简单的有判断数字还是字符串，进阶一点的有判断数组还是对象，再进阶一点的有判断日期、正则、错误类型，再再进阶一点还有比如判断 plainObject、空对象、Window 对象等等

// typeof
// 我们最最常用的莫过于 typeof，注意，尽管我们会看到诸如：
// console.log(typeof ('Ace Yang')) // string
// 的写法，但是 typeof 可是一个正宗的运算符，就跟加减乘除一样！这就能解释为什么下面这种写法也是可行的：
// console.log(typeof 'Ace Yang')  // string

// 引用《JavaScript权威指南》中对 typeof 的介绍：
// typeof 是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的一个字符串。
// 那我们都知道，在 ES6 前，JavaScript 共六种数据类型，分别是：

// Undefined、Null、Boolean、Number、String、Object
// 然而当我们使用 typeof 对这些数据类型的值进行操作的时候，返回的结果却不是一一对应，分别是
// undefined、object、boolean、number、string、object
// 注意以上都是小写的字符串。Null 和 Object 类型都返回了 object 字符串。
// 尽管不能一一对应，但是 typeof 却能检测出函数类型：

// function a() {}
// console.log(typeof a); // function

// 所以 typeof 能检测出六种类型的值，但是，除此之外 Object 下还有很多细分的类型呐，如 Array、Function、Date、RegExp、Error 等。
// 如果用 typeof 去检测这些类型，举个例子：
var date = new Date()
var error = new Error()
console.log(typeof date) // object
console.log(typeof error) // object
// 返回的都是 object 呐，这可怎么区分~ 所以有没有更好的方法呢？

// Object.prototype.toString
// 是的，当然有！这就是 Object.prototype.toString！
// 那 Object.prototype.toString 究竟是一个什么样的方法呢？
// 为了更加细致的讲解这个函数，让我先献上 ES5 规范地址：https://es5.github.io/#x15.2.4.2。
// 在第 15.2.4.2 节讲的就是 Object.prototype.toString()，为了不误导大家，我先奉上英文版：

// When the toString method is called, the following steps are taken:
// 1、If the this value is undefined, return "[object Undefined]".
// 2、If the this value is null, return "[object Null]".
// 3、Let O be the result of calling ToObject passing the this value as the argument.
// 4、Let class be the value of the [[Class]] internal property of O.
// 5、Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".

// 凡是规范上加粗或者斜体的，在这里我也加粗或者斜体了，就是要让大家感受原汁原味的规范！
// 如果没有看懂，就不妨看看我理解的：

// 当 toString 方法被调用的时候，下面的步骤会被执行：
// 1、如果 this 值是 undefined，就返回 [object Undefined]
// 2、如果 this 的值是 null，就返回 [object Null]
// 3、让 O 成为 ToObject(this) 的结果
// 4、让 class 成为 O 的内部属性 [[Class]] 的值
// 5、最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串

// 通过规范，我们至少知道了调用 Object.prototype.toString 会返回一个由 "[object " 和 class 和 "]" 组成的字符串，而 class 是要判断的对象的内部属性。
// 让我们写个 demo:
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]

var date = new Date()
console.log(Object.prototype.toString.call(date)) // [object Date]

// 由此我们可以看到这个 class 值就是识别对象类型的关键！
// 正是因为这种特性，我们可以用 Object.prototype.toString 方法识别出更多类型！

// 那到底能识别多少种类型呢？
// 以下是11种：
var number = 1 // [object Number]
var string = '123' // [object String]
var boolean = true // [object Boolean]
var und = undefined // [object Undefined]
var nul = null // [object Null]
var obj = { a: 1 } // [object Object]
var array = [1, 2, 3] // [object Array]
var date = new Date() // [object Date]
var error = new Error() // [object Error]
var reg = /a/g // [object RegExp]
var func = function a() {} // [object Function]

function checkType() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(Object.prototype.toString.call(arguments[i]))
  }
}
checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
// 除了以上 11 种之外，还有：
console.log(Object.prototype.toString.call(Math)) // [object Math]
console.log(Object.prototype.toString.call(JSON)) // [object JSON]
// 除了以上 13 种之外，还有：
function a() {
  console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
}
a()
// 所以我们可以识别至少 14 种类型，当然我们也可以算出来，[[class]] 属性至少有 12 个。

// type API
// 既然有了 Object.prototype.toString 这个神器！那就让我们写个 type 函数帮助我们以后识别各种类型的值吧！
// 我的设想：写一个 type 函数能检测各种类型的值，如果是基本类型，就使用 typeof，引用类型就使用 toString。此外鉴于 typeof 的结果是小写，我也希望所有的结果都是小写。
// 考虑到实际情况下并不会检测 Math 和 JSON，所以去掉这两个类型的检测。

// 我们来写一版代码：

// 第一版
var class2type = {}
// 生成class2type映射
'Boolean Number String Function Array Date RegExp Object Error Null Undefined'
  .split(' ')
  .map(function (item, index) {
    class2type['[object ' + item + ']'] = item.toLowerCase()
  })

function type(obj) {
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj
}
// 嗯，看起来很完美的样子~~ 但是注意，在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
// 我去，竟然还有这个兼容性！有什么简单的方法可以解决吗？那我们再改写一版，绝对让你惊艳！

// 第二版
var class2type = {}

// 生成class2type映射
'Boolean Number String Function Array Date RegExp Object Error'
  .split(' ')
  .map(function (item, index) {
    class2type['[object ' + item + ']'] = item.toLowerCase()
  })

function type(obj) {
  // 一箭双雕
  if (obj == null) {
    return obj + ''
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj
}

// isFunction
// 有了 type 函数后，我们可以对常用的判断直接封装，比如 isFunction:
function isFunction(obj) {
  return type(obj) === 'function'
}

// 数组
// jQuery 判断数组类型，旧版本是通过判断 Array.isArray 方法是否存在，如果存在就使用该方法，不存在就使用 type 函数。

var isArray =
  Array.isArray ||
  function (obj) {
    return type(obj) === 'array'
  }
// 但是在 jQuery v3.0 中已经完全采用了 Array.isArray。

// 结语
// 到此，类型判断的上篇就结束了，我们已经可以判断日期、正则、错误类型啦，但是还有更复杂的判断比如 plainObject、空对象、Window对象、类数组对象等，路漫漫其修远兮，吾将上下而求索。

// 前言(类型判断下)
// 在上篇《JavaScript专题之类型判断(上)》中，我们抄袭 jQuery 写了一个 type 函数，可以检测出常见的数据类型，然而在开发中还有更加复杂的判断，比如 plainObject、空对象、Window 对象等，这一篇就让我们接着抄袭 jQuery 去看一下这些类型的判断。

// plainObject
// plainObject 来自于 jQuery，可以翻译成纯粹的对象，所谓"纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。
// 之所以要判断是不是 plainObject，是为了跟其他的 JavaScript对象如 null，数组，宿主对象（documents）等作区分，因为这些用 typeof 都会返回object。
// jQuery提供了 isPlainObject 方法进行判断，先让我们看看使用的效果：

function Person(name) {
  this.name = name
}
console.log($.isPlainObject({})) // true
console.log(isPlainObject(new Object())) // true
console.log($.isPlainObject(Object.create(null))) // true
console.log($.isPlainObject(Object.assign({ a: 1 }, { b: 2 }))) // true
console.log(isPlainObject(new Person('Ace Yang'))) // false
console.log($.isPlainObject(Object.create({}))) // false
// 由此我们可以看到，除了 {} 和 new Object 创建的之外，jQuery 认为一个没有原型的对象也是一个纯粹的对象
// 实际上随着 jQuery 版本的提升，isPlainObject 的实现也在变化，我们今天讲的是 3.0 版本下的 isPlainObject，我们直接看源码

function isPlainObject(obj) {
  // 上节中写 type 函数时，用来存放 toString 映射结果的对象
  var class2type = {}
  // 相当于 Object.prototype.toString
  var toString = class2type.toString
  // 相当于 Object.prototype.hasOwnProperty
  var hasOwn = class2type.hasOwnProperty

  var proto, Ctor
  // 排除掉明显不是 obj 的以及一些宿主对象如 Window
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }
  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj)
  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
    return true
  }
  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return (
    typeof Ctor === 'function' &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  )
}
// 注意：我们判断 Ctor 构造函数是不是 Object 构造函数，用的是 hasOwn.toString.call(Ctor)，这个方法可不是 Object.prototype.toString，不信我们在函数里加上下面这两句话：
// console.log(hasOwn.toString.call(Ctor)) // function Object() { [native code] }
// console.log(Object.prototype.toString.call(Ctor)) // [object Function]
// 发现返回的值并不一样，这是因为 hasOwn.toString 调用的其实是 Function.prototype.toString，毕竟 hasOwnProperty 可是一个函数！

// 而且 Function 对象覆盖了从 Object 继承来的 Object.prototype.toString 方法。函数的 toString 方法会返回一个表示函数源代码的字符串。具体来说，包括 function关键字，形参列表，大括号，以及函数体中的内容。

// EmptyObject
// jQuery提供了 isEmptyObject 方法来判断是否是空对象，代码简单，我们直接看源码：
function isEmptyObject(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}
// 其实所谓的 isEmptyObject 就是判断是否有属性，for 循环一旦执行，就说明有属性，有属性就会返回 false。
console.log(isEmptyObject({})) // true
console.log(isEmptyObject([])) // true
console.log(isEmptyObject(null)) // true
console.log(isEmptyObject(undefined)) // true
console.log(isEmptyObject(1)) // true
console.log(isEmptyObject('')) // true
console.log(isEmptyObject(true)) // true
// 以上都会返回 true
// 但是既然 jQuery 是这样写，可能是因为考虑到实际开发中 isEmptyObject 用来判断 {} 和 {a: 1} 是足够的吧。如果真的是只判断 {}，完全可以结合上篇写的 type 函数筛选掉不适合的情况。

// Window对象
// Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身，这点在《JavaScript深入之变量对象》中讲到过。我们可以利用这个特性判断是否是 Window 对象。
function isWindow(obj) {
  return obj != null && obj === obj.window
}

// isArrayLike
// isArrayLike，看名字可能会让我们觉得这是判断类数组对象的，其实不仅仅是这样，jQuery 实现的 isArrayLike，数组和类数组都会返回 true。
// 因为源码比较简单，我们直接看源码：
function isArrayLike(obj) {
  // obj 必须有 length属性
  var length = !!obj && 'length' in obj && obj.length
  var typeRes = type(obj)

  // 排除掉函数和 Window 对象
  if (typeRes === 'function' || isWindow(obj)) {
    return false
  }

  return (
    typeRes === 'array' ||
    length === 0 ||
    (typeof length === 'number' && length > 0 && length - 1 in obj)
  )
}
// 重点分析 return 这一行，使用了或语句，只要一个为 true，结果就返回 true。
// 所以如果 isArrayLike 返回true，至少要满足三个条件之一：
// 1、是数组
// 2、长度为 0
// 3、lengths 属性是大于 0 的数字类型，并且obj[length - 1]必须存在
// 第一个就不说了，看第二个，为什么长度为 0 就可以直接判断为 true 呢？
// 那我们写个对象：
// var obj = {a: 1, b: 2, length: 0}
// isArrayLike 函数就会返回 true，那这个合理吗？
// 回答合不合理之前，我们先看一个例子：
function a() {
  console.log(isArrayLike(arguments))
}
a()
// 如果我们去掉length === 0 这个判断，就会打印 false，然而我们都知道 arguments 是一个类数组对象，这里是应该返回 true 的
// 所以是不是为了放过空的 arguments 时也放过了一些存在争议的对象呢？
// 第三个条件：length 是数字，并且 length > 0 且最后一个元素存在。
// 为什么仅仅要求最后一个元素存在呢？
// 让我们先想下数组是不是可以这样写：
// var arr = [,,3]
// 当我们写一个对应的类数组对象就是：

var arrLike = {
  2: 3,
  length: 3
}
// 也就是说当我们在数组中用逗号直接跳过的时候，我们认为该元素是不存在的，类数组对象中也就不用写这个元素，但是最后一个元素是一定要写的，要不然 length 的长度就不会是最后一个元素的 key 值加 1。比如数组可以这样写
var arr = [1, ,]
console.log(arr.length) // 2
// 但是类数组对象就只能写成：
var arrLike = {
  0: 1,
  length: 1
}
// 所以符合条件的类数组对象是一定存在最后一个元素的！
// 这就是满足 isArrayLike 的三个条件，其实除了 jQuery 之外，很多库都有对 isArrayLike 的实现，比如 underscore:
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1

var isArrayLike = function (collection) {
  var length = getLength(collection)
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}

// isElement
// isElement 判断是不是 DOM 元素。
var isElement = function (obj) {
  return !!(obj && obj.nodeType === 1)
}
// 结语
// 这一篇我们介绍了 jQuery 的 isPlainObject、isEmptyObject、isWindow、isArrayLike、以及 underscore 的 isElement 实现。我们可以看到，即使是 jQuery 这样优秀的库，一些方法的实现也并不是非常完美和严密的，但是最后为什么这么做，其实也是一种权衡，权衡所失与所得，正如玉伯在《从 JavaScript 数组去重谈性能优化》中讲到：
// 所有这些点，都必须脚踏实地在具体应用场景下去分析、去选择，要让场景说话。
