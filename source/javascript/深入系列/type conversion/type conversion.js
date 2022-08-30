// Part One
// 在 JavaScript 中，有一部分内容，情况复杂，容易出错，饱受争议但又应用广泛，这便是类型转换。
// 前言
// 将值从一种类型转换为另一种类型通常称为类型转换。
// ES6 前，JavaScript 共有六种数据类型：Undefined、Null、Boolean、Number、String、Object。
// 我们先捋一捋基本类型之间的转换。

// 原始值转布尔
// 我们使用 Boolean 函数将类型转换成布尔类型，在 JavaScript 中，只有 6 种值可以被转换成 false，其他都会被转换成 true。
// console.log(Boolean()) // false
// console.log(Boolean(false)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(+0)) // false
// console.log(Boolean(-0)) // false
// console.log(Boolean(NaN)) // false
// console.log(Boolean('')) // false
// 注意，当 Boolean 函数不传任何参数时，会返回 false。

// 原始值转数字
// 我们可以使用 Number 函数将类型转换成数字类型，如果参数无法被转换为数字，则返回 NaN。
// 在看例子之前，我们先看 ES5 规范 15.7.1.1 中关于 Number 的介绍：
// 15.7.1.1 Number ( [ value ] ) # Ⓣ
// Returns a Number value (not a Number object) computed by ToNumber(value) if value was supplied, else returns +0.
// 根据规范，如果 Number 函数不传参数，返回 +0，如果有参数，调用 ToNumber(value)。
// 注意这个 ToNumber 表示的是一个底层规范实现上的方法，并没有直接暴露出来。
// 而 ToNumber 则直接给了一个对应的结果表。表如下：

// 参数类型	结果
// Undefined	NaN
// Null	+0
// Boolean	如果参数是 true，返回 1。参数为 false，返回 +0
// Number	返回与之相等的值
// String	这段比较复杂，看例子

// 让我们写几个例子验证一下：
console.log(Number()) // +0
console.log(Number(undefined)) // NaN
console.log(Number(null)) // +0
console.log(Number(false)) // +0
console.log(Number(true)) // 1
console.log(Number('123')) // 123
console.log(Number('-123')) // -123
console.log(Number('1.2')) // 1.2
console.log(Number('000123')) // 123
console.log(Number('-000123')) // -123
console.log(Number('0x11')) // 17  识别 以0开头的进制
console.log(Number('')) // 0
console.log(Number(' ')) // 0
console.log(Number('123 123')) // NaN
console.log(Number('foo')) // NaN
console.log(Number('100a')) // NaN
// 如果通过 Number 转换函数传入一个字符串，它会试图将其转换成一个整数或浮点数，而且会忽略所有前导的 0，如果有一个字符不是数字，结果都会返回 NaN，鉴于这种严格的判断，我们一般还会使用更加灵活的 parseInt 和 parseFloat 进行转换。
// parseInt 只解析整数，parseFloat 则可以解析整数和浮点数，如果字符串前缀是 "0x" 或者"0X"，parseInt 将其解释为十六进制数，parseInt 和 parseFloat 都会跳过任意数量的前导空格，尽可能解析更多数值字符，并忽略后面的内容。如果第一个非空格字符是非法的数字直接量，将最终返回 NaN：
console.log(parseInt('3 abc')) // 3
console.log(parseFloat('3.14 abc')) // 3.14
console.log(parseInt('-12.34')) // -12
console.log(parseInt('0xFF')) // 255 识别 以0开头的进制
console.log(parseFloat('.1')) // 0.1
console.log(parseInt('0.1')) // 0
console.log(parseInt('')) // NaN  如果第一个字符不能转换为数字，parseInt会返回 NaN。
console.log(parseInt(null)) // NaN  如果第一个字符不能转换为数字，parseInt会返回 NaN。

// 原始值转字符
// 我们使用 String 函数将类型转换成字符串类型，依然先看 规范15.5.1.1中有关 String 函数的介绍：
// 15.5.1.1 String ( [ value ] ) # Ⓣ
// Returns a String value (not a String object) computed by ToString(value). If value is not supplied, the empty String "" is returned.
// 如果 String 函数不传参数，返回空字符串，如果有参数，调用 ToString(value)，而 ToString 也给了一个对应的结果表。表如下：参数类型	结果

// Undefined	"undefined"
// Null	"null"
// Boolean	如果参数是 true，返回 "true"。参数为 false，返回 "false"
// Number	又是比较复杂，可以看例子
// String	返回与之相等的值

// 让我们写几个例子验证一下：
console.log(String()) // 空字符串
console.log(String(undefined)) // undefined
console.log(String(null)) // null
console.log(String(false)) // false
console.log(String(true)) // true
console.log(String(0)) // 0
console.log(String(-0)) // 0
console.log(String(NaN)) // NaN
console.log(String(Infinity)) // Infinity
console.log(String(-Infinity)) // -Infinity
console.log(String(1)) // 1
// 注意这里的 ToString 和上一节的 ToNumber 都是底层规范实现的方法，并没有直接暴露出来。

// 原始值转对象
// 原始值到对象的转换非常简单，原始值通过调用 String()、Number() 或者 Boolean() 构造函数，转换为它们各自的包装对象。
// null 和 undefined 属于例外，当将它们用在期望是一个对象的地方都会造成一个类型错误 (TypeError) 异常，而不会执行正常的转换。
var a = 1
console.log(typeof a) // number
var b = new Number(a)
console.log(typeof b) // object

// 对象转布尔值
// 对象到布尔值的转换非常简单：所有对象(包括数组和函数)都转换为 true。对于包装对象也是这样，举个例子：
console.log(Boolean(new Boolean(false))) // true

// 对象转字符串和数字
// 对象到字符串和对象到数字的转换都是通过调用待转换对象的一个方法来完成的。而 JavaScript 对象有两个不同的方法来执行转换，一个是 toString，一个是 valueOf。注意这个跟上面所说的 ToString 和 ToNumber 是不同的，这两个方法是真实暴露出来的方法。
// 所有的对象除了 null 和 undefined 之外的任何值都具有 toString 方法，通常情况下，它和使用 String 方法返回的结果一致。toString 方法的作用在于返回一个反映这个对象的字符串，然而这才是情况复杂的开始。
// 在《JavaScript专题之类型判断(上)》中讲到过 Object.prototype.toString 方法会根据这个对象的[[class]]内部属性，返回由 "[object " 和 class 和 "]" 三个部分组成的字符串。举个例子：
// Object.prototype.toString.call({a: 1}) // "[object Object]"
// ({a: 1}).toString() // "[object Object]"
// ({a: 1}).toString === Object.prototype.toString // true
// 我们可以看出当调用对象的 toString 方法时，其实调用的是 Object.prototype 上的 toString 方法。

// 然而 JavaScript 下的很多类根据各自的特点，定义了更多版本的 toString 方法。例如:
// 1.数组的 toString 方法将每个数组元素转换成一个字符串，并在元素之间添加逗号后合并成结果字符串。
// 2.函数的 toString 方法返回源代码字符串。
// 3.日期的 toString 方法返回一个可读的日期和时间字符串
// 4.RegExp 的 toString 方法返回一个表示正则表达式直接量的字符串。
// 读文字太抽象？我们直接写例子
console.log({}.toString()) // [object Object]
console.log([].toString()) // 空字符串
console.log([0].toString()) // 0
console.log([1, 2, 3].toString()) // 1,2,3
console.log(
  function () {
    var a = 1
  }.toString()
) // function (){var a = 1;}
console.log(/\d+/g.toString()) // /\d+/g
console.log(new Date(2020, 6, 31).toString()) // Fri Jul 31 2020 00:00:00 GMT+0800 (China Standard Time)
// 而另一个转换对象的函数是 valueOf，表示对象的原始值。默认的 valueOf 方法返回这个对象本身，数组、函数、正则简单的继承了这个默认方法，也会返回对象本身。日期是一个例外，它会返回它的一个内容表示: 1970 年 1 月 1 日以来的毫秒数。
var date = new Date(2020, 6, 31)
console.log(date.valueOf()) // 1596124800000

// 对象接着转字符串和数字
// 了解了 toString 方法和 valueOf 方法，我们分析下从对象到字符串是如何转换的。看规范 ES5 9.8，其实就是 ToString 方法的对应表，只是这次我们加上 Object 的转换规则：
// 参数类型	结果
// Object	1. primValue = ToPrimitive(input, String) 2. 返回ToString(primValue).
// 所谓的 ToPrimitive 方法，其实就是输入一个值，然后返回一个一定是基本类型的值。
// 我们总结一下，当我们用 String 方法转化一个值的时候，如果是基本类型，就参照 “原始值转字符” 这一节的对应表，如果不是基本类型，我们会将调用一个 ToPrimitive 方法，将其转为基本类型，然后再参照“原始值转字符” 这一节的对应表进行转换。
// 其实，从对象到数字的转换也是一样：
// 参数类型	结果
// Object	1. primValue = ToPrimitive(input, Number) 2. 返回ToNumber(primValue)。
// 虽然转换成基本值都会使用 ToPrimitive 方法，但传参有不同，最后的处理也有不同，转字符串调用的是 ToString，转数字调用 ToNumber。

// ToPrimitive
// 那接下来就要看看 ToPrimitive 了，在了解了 toString 和 valueOf 方法后，这个也很简单
// 让我们看规范 9.1，函数语法表示如下：
// ToPrimitive(input[, PreferredType])
// 第一个参数是 input , 表示要处理的输入值
// 第二个参数是 PreferredType , 非必填，表示希望转换成的类型，有两个值可以选， Number 或者 String
// 当不传入 PreferredType 时，如果 input 是日期类型，相当于传入 String， 否则，都相当于传入 Number
// 如果传入的 input 是 Undefined、Null、Boolean、Number、String类型， 直接返回该值
// 如果是 ToPrimitive(obj, Number), 处理步骤如下：
// 1、如果 obj 为 基本类型，直接返回
// 2、否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
// 3、否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
// 4、否则，JavaScript 抛出一个类型错误异常。
// 如果是 ToPrimitive(obj, String)，处理步骤如下：
// 1、如果 obj为 基本类型，直接返回
// 2、否则，调用 toString 方法，如果返回一个原始值，则 JavaScript 将其返回。
// 3、否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
// 4、否则，JavaScript 抛出一个类型错误异常

// 对象转字符串
// 所以总结下，对象转字符串可以概括为：
// 1、如果对象具有 toString 方法，则调用这个方法。如果他返回一个原始值，JavaScript 将这个值转换为字符串，并返回这个字符串结果
// 2、如果对象没有 toString 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 valueOf 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转换为字符串，并返回这个字符串的结果
// 3、否则，JavaScript 无法从 toString 或者 valueOf 获得一个原始值，这时它将抛出一个类型错误异常

// 对象转数字
// 对象转数字的过程中，JavaScript 做了同样的事情，只是它会首先尝试 valueOf 方法
// 1、如果对象具有 valueOf 方法，且返回一个原始值，则 JavaScript 将这个原始值转换为数字并返回这个数字
// 2、否则，如果对象具有 toString 方法，且返回一个原始值，则 JavaScript 将其转换并返回。
// 3、否则，JavaScript 抛出一个类型错误异常。
// 举个例子：
console.log(Number({})) // NaN
console.log(Number({ a: 1 })) // NaN
console.log(Number([])) // 0
console.log(Number([0])) // 0
console.log(Number([1, 2, 3])) // NaN
console.log(
  Number(function () {
    var a = 1
  })
) // NaN
console.log(Number(/\d+/g)) // NaN
console.log(Number(new Date(2020, 7, 6))) // 1596643200000
console.log(Number(new Error('a'))) // NaN
// 注意，在这个例子中，[] 和 [0] 都返回了 0，而 [1, 2, 3] 却返回了一个 NaN。我们分析一下原因：
// 当我们 Number([]) 的时候，先调用 [] 的 valueOf 方法，此时返回 []，因为返回了一个对象而不是原始值，所以又调用了 toString 方法，此时返回一个空字符串，接下来调用 ToNumber 这个规范上的方法，参照对应表，转换为 0, 所以最后的结果为 0
// 而当我们 Number([1, 2, 3]) 的时候，先调用 [1, 2, 3] 的 valueOf 方法，此时返回 [1, 2, 3]，再调用 toString 方法，此时返回 1,2,3，接下来调用 ToNumber，参照对应表，因为无法转换为数字，所以最后的结果为 NaN。

// valueOf转换规则
// valueOf是Object.prototype的方法，由Object来的对象都会有该方法，但是很多内置对象会重写这个方法，以适合实际需要。

// 对象	valueOf返回值
// Array	数组本身
// Boolean	布尔值
// Date	返回毫秒形式的时间戳
// Function	函数本身
// Number	数字值
// Object	对象本身
// String	字符串值

// toString转换规则

// 对象	 toString返回值
// Array	以逗号分割的字符串，如[1,2]的toString返回值为"1,2"
// Boolean	"True"
// Date	 可读的时间字符串，如"Tue Oct 15 2019 12:20:56 GMT+0800 (中国标准时间)"
// Function	声明函数的JS源代码字符串
// Number	"数字值"
// Object	"[object Object]"
// String	字符串"

// JSON.stringify
// 值得一提的是：JSON.stringify() 方法可以将一个 JavaScript 值转换为一个 JSON 字符串，实现上也是调用了 toString 方法，也算是一种类型转换的方法。下面讲一讲JSON.stringify 的注意要点：
// 1.处理基本类型时，与使用toString基本相同，结果都是字符串，除了 undefined, NaN 和 Infinity 格式的数值及 null 都会被当做 nul
console.log(JSON.stringify(null)) // null
console.log(JSON.stringify(undefined)) // undefined , 返回 undefined 而不是 字符串 undefined
console.log(JSON.stringify(true)) // true
console.log(JSON.stringify(42)) // 42
console.log(JSON.stringify('42')) // "42"
console.log(JSON.stringify(NaN)) // null
console.log(JSON.stringify(Infinity)) // null
console.log(JSON.stringify(-Infinity)) // null
// 2.布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
console.log(
  JSON.stringify([new Number(1), new String('false'), new Boolean(false)])
) // [1,"false",false]
// 3.undefined、任意的函数以及symbol值，在序列化过程中会被忽略（出现在非数组对象的属性值中时且非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中）或者被转换成 null （出现在数组中时）
// undefined、任意的函数以及symbol值单独序列化返回 undefined (非字符串)
console.log(JSON.stringify({ x: undefined, y: Object, z: Symbol('') })) // {}
console.log(JSON.stringify([undefined, Object, Symbol('')])) // [null,null,null]
console.log(JSON.stringify(undefined)) // undefined , 返回 undefined 而不是 字符串 undefined
console.log(JSON.stringify(function () {})) // undefined , 返回 undefined 而不是 字符串 undefined
// 4.JSON.stringify 有第二个参数 replacer，它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。
function replacer(key, value) {
  if (typeof value === 'string') {
    return undefined
  }
  return value
}
var foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 45,
  transport: 'car',
  month: 7
}
var jsonString = JSON.stringify(foo, replacer)
console.log(jsonString) // {"week":45,"month":7}
console.log(JSON.stringify(Symbol('a'))) // undefined , 返回 undefined 而不是 字符串 undefined
// 5.如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是那个对象被序列化，而是调用 toJSON 方法后的返回值会被序列化，并且忽略其他属性的值,例如
var obj = {
  foo: 'foo',
  toJSON: function () {
    return 'bar'
  }
}
console.log(JSON.stringify(obj)) // bar
console.log(JSON.stringify({ x: obj })) // {"x":"bar"}
// 6.对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误
var obj1 = {
  a: 1
}
obj1.b = obj1
// console.log(JSON.stringify(obj1)) // Uncaught TypeError: Converting circular structure to JSON
// 7.Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
console.log(JSON.stringify({ now: new Date() })) // {"now":"2020-08-06T23:27:19.542Z"}
// 8.其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
// 不可枚举的属性默认会被忽略：
console.log(
  JSON.stringify(
    Object.create(null, {
      x: { value: 'json', enumerable: false },
      y: { value: 'stringify', enumerable: true }
    })
  )
) // "{"y":"stringify"}"

// Part Two
// 前言 举个例子： console.log(1 + '1')
// 在 JavaScript 中，这是完全可以运行的，不过你有没有好奇，为什么 1 和 '1' 分属不同的数据类型，为什么就可以进行运算呢？
// 这其实是因为 JavaScript 自动的将数据类型进行了转换，我们通常称为隐式类型转换。但是我们都知道，+运算符既可以用于数字加法，也能用于字符串拼接，那在这个例子中，是将数字 1 转成字符串 '1'，进行拼接运算？还是将字符串 '1' 转成数字 1，进行加法运算呢？
// 先卖个关子，虽然估计你也知道答案。今天，我们就常见的隐式类型转化的场景进行介绍。

// 一元操作符 +
console.log(+'1') // 1
// 当 + 运算符作为一元操作符的时候，查看 ES5规范1.4.6，会调用 ToNumber 处理该值，相当于 Number('1')，最终结果返回数字 1。
// 那么下面的这些结果呢？
console.log(+[]) // 0
console.log(+['1']) // 1
console.log(+['1', '2', '3']) // NaN
console.log(+{}) // NaN
// 既然是调用 ToNumber 方法，回想《JavaScript 深入之头疼的类型转换(上)》中的内容，当输入的值是对象的时候，先调用 ToPrimitive(input, Number) 方法，执行的步骤是：
// 1、如果 obj 为基本类型，直接返回
// 2、否则，调用 valueOf 方法，如果返回一个原始值，则 JavaScript 将其返回。
// 3、否则，调用 toString 方法，如果返回一个原始值，则JavaScript 将其返回。
// 4、否则，JavaScript 抛出一个类型错误异常。

// 二元操作符 +
// 规范
// 现在 + 运算符又变成了二元操作符，毕竟它也是加减乘除中的加号
// 1 + '1' 我们知道答案是 '11'，那 null + 1、[] + []、[] + {}、{} + {} 呢？
// 如果要了解这些运算的结果，不可避免的我们要从规范下手。
// 规范地址：http://es5.github.io/#x11.6.1
// 不过这次就不直接大段大段的引用规范了，直接给大家讲简化后的内容。
// 到底当执行 + 运算的时候，会执行怎样的步骤呢？让我们根据规范11.6.1 来捋一捋：
// 当计算 value1 + value2时：
// 1、lprim = ToPrimitive(value1)
// 2、rprim = ToPrimitive(value2)
// 3、如果 lprim 是字符串或者 rprim 是字符串，那么返回 ToString(lprim) 和 ToString(rprim)的拼接结果
// 4、返回 ToNumber(lprim) 和 ToNumber(rprim)的运算结果
// 规范的内容就这样结束了。没有什么新的内容，ToString、ToNumber、ToPrimitive都是在《JavaScript 深入之头疼的类型转换(上)》中讲到过的内容，所以我们直接进分析阶段：
// 让我们来举几个例子：

// 1.Null 与数字
console.log(null + 1) // 0
// 按照规范的步骤进行分析：
// 1、lprim = ToPrimitive(null) 因为null是基本类型，直接返回，所以 lprim = null
// 2、rprim = ToPrimitive(1) 因为 1 是基本类型，直接返回，所以 rprim = null
// 3、lprim 和 rprim 都不是字符串
// 4、返回 ToNumber(null) 和 ToNumber(1) 的运算结果
// 接下来：ToNumber(null) 的结果为0，(回想上篇 Number(null))，ToNumber(1) 的结果为 1
// 所以，null + 1 相当于 0 + 1，最终的结果为数字 1。
// 这个还算简单，看些稍微复杂的：

// 2.数组与数组
console.log([] + [])
// 依然按照规范
// 1、lprim = ToPrimitive([])，[]是数组，相当于ToPrimitive([], Number)，先调用valueOf方法，返回对象本身，因为不是原始值，调用toString方法，返回空字符串""
// 2、rprim类似
// 3、lprim和rprim都是字符串，执行拼接操作
// 所以，[] + []相当于 "" + ""，最终的结果是空字符串""。
// 看个更复杂的：

// 3.数组与对象
console.log({} + []) // [object Object]
console.log([] + {}) // [object Object]
// 按照规范：
// 1、lprim = ToPrimitive([])，lprim = ""
// 2、rprim = ToPrimitive({})，相当于调用 ToPrimitive({}, Number)，先调用 valueOf 方法，返回对象本身，因为不是原始值，调用 toString 方法，返回 "[object Object]"
// 3、lprim 和 rprim 都是字符串，执行拼接操作
// 所以，[] + {} 相当于 "" + "[object Object]"，最终的结果是 "[object Object]"。
// 下面的例子，可以按照示例类推出结果：
console.log(1 + true) // 2
console.log({} + {}) // [object Object][object Object]
console.log(new Date(2020, 07, 12) + 1) // Wed Aug 12 2020 00:00:00 GMT+0800 (China Standard Time)1
// 注意
// 以上的运算都是在 console.log 中进行，如果你直接在 Chrome 或者 Firebug 开发工具中的命令行直接输入，你也许会惊讶的看到一些结果的不同

// == 相等
// 规范  "==" 用于比较两个值是否相等，当要比较的两个值类型不一样的时候，就会发生类型的转换。

// 关于使用"=="进行比较的时候，具体步骤可以查看规范11.9.5：
// 当执行x == y 时：
// 1. 如果 x 与 y 是同一类型：
//   i. x 是 Undefined, 返回 true
//   ii. x 是 Null, 返回 true
//   iii. x 是数字：
//     a. x 是 NaN，返回 false
//     b. y 是 NaN，返回 false
//     c. x 与 y 相等，返回 true
//     d. x 是 +0，y 是 -0，返回 true
//     e. x 是 -0，y 是 +0，返回 true
//     f. 返回 false
//   iv. x 是字符串，完全相等返回 true, 否则返回 false
//   v. x 是布尔值，x 和 y 都是 true 或者 false，返回 true，否则返回 false
//   vi. x 和 y 指向同一个对象，返回 true，否则返回 false

// 2. x 是 null 并且 y 是 undefined，返回 true
// 3. x 是 undefined 并且 y 是 null，返回 true
// 4. x 是数字，y 是字符串，判断 x == ToNumber(y)
// 5. x 是字符串，y 是数字，判断 ToNumber(x) == y
// 6. x 是布尔值，判断 ToNumber(x) == y
// 7. y 是布尔值，判断 x == ToNumber(y)
// 8. x 是字符串或者数字，y 是对象，判断 x == ToPrimitive(y)
// 9. x 是对象，y 不是字符串或者数字，判断 ToPrimitive(x) == y
// 10. 返回false

// 觉得看规范判断太复杂？我们来分几种情况来看

// 1. null和undefined
console.log(null == undefined) // true
// 看规范第2、3步：
// 2. x 是 null 并且 y 是 undefined，返回 true
// 3. x 是 undefined 并且 y 是 null，返回 true
// 所以例子的结果自然为 true。
// 这时候，我们可以回想在《JavaScript专题之类型判断(上)》中见过的一段 demo，就是编写判断对象的类型 type 函数时，如果输入值是 undefined，就返回字符串 undefined，如果是 null，就返回字符串 null。
// 如果是你，你会怎么写呢？
// 下面是 jQuery 的写法：
function type(obj) {
  if (obj == null) {
    return obj + ''
  }
}

// 2. 字符串与数字
console.log('1' == 1)
// 结果肯定是true，问题在于是字符串转化成了数字和数字比较还是数字转换成了字符串和字符串比较呢？
// 看规范第4、5步：
// 4. x 是数字，y 是字符串，判断 x == ToNumber(y)
// 5. x 是字符串，y 是数字，判断 ToNumber(x) == y
// 结果很明显，都是转换成数字后再进行比较

// 3. 布尔值和其他类型
console.log(true == '2')
// 当要判断的一方出现 false 的时候，往往最容易出错，比如上面这个例子，凭直觉应该是 true，毕竟 Boolean('2') 的结果可是true，但这道题的结果却是false。
// 归根到底，还是要看规范，规范第6、7步：
// 6. x 是布尔值，判断 ToNumber(x) == y
// 7. y 是布尔值，判断 x ==ToNumber(y)
// 当一方出现布尔值的时候，就会对这一方的值进行ToNumber处理，也就是说true会被转化成1，也就是相当于 1 == '2' 回到了 上面的 2.字符串与数字的比较
// 所以当一方是布尔值的时候，会对布尔值进行转换，因为这种特性，所以尽量少使用 xx == true 和 xx == false 的写法。

// 不建议
if (a == true) {
}

// 建议
if (a) {
}
// 更好
if (!!a) {
}

// 4. 对象与非对象
console.log(42 == ['42'])
// 看规范第8、9步：
// 8. x 不是字符串或者数字，y 是对象，判断 x == ToPrimitive(y)
// 9. x 是对象，y 不是字符串或者数字，判断 ToPrimitive(x) == y
// 以这个例子为例，会使用 ToPrimitive 处理 ['42']，调用valueOf，返回对象本身，再调用 toString，返回 '42'，所以 42 == ['42'] 相当于 42 == '42' 相当于42 == 42，结果为 true。
// 到此为止，我们已经看完了第2、3、4、5、6、7、8、9步，其他的一概返回 false。

// 其他
// 再多举几个例子进行分析
console.log(false == undefined)
// false == undefined 相当于 0 == undefined 不符合上面的情形，执行最后一步 返回 false
console.log(false == [])
// false == [] 相当于 0 == [] 相当于 0 == '' 相当于 0 == 0，结果返回 true
console.log([] == ![])
// 首先会执行 ![] 操作，转换成 false，相当于 [] == false 相当于 [] == 0 相当于 '' == 0 相当于 0 == 0，结果返回 true
// 最后再举一些会让人踩坑的例子：
console.log(false == '0')
console.log(false == 0)
console.log(false == '')

console.log('' == 0)
console.log('' == [])

console.log([] == 0)

console.log('' == [null])
console.log(0 == '\n')
console.log([] == 0)
// 以上均返回 true
// 除了这两种情形之外，其实还有很多情形会发生隐式类型转换，比如if、? :、&&等情况，但相对来说，比较简单，就不再讲解。
