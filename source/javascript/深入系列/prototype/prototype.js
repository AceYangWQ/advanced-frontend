// 构造函数创建对象
// 我们先用构造函数创建一个对象
function Person() {
    console.log(this)
}
var person = new Person()
person.name = 'Ace Yang'
// console.log(person.name) // Ace Yang



// prototype
// 每一个函数都有一个 prototype 属性 （prototype是函数才会有的属性）
function Person() {

}
Person.prototype.name = 'Ace Yang'
var person1 = new Person()
var person2 = new Person()
// console.log(person1.name) // Ace Yang
// console.log(person2.name) // Ace Yang

// 其实，函数的 prototype 指向了一个对象，这个对象正是调用该构造函数而创建实例的原型
// 那什么是原型呢？可以这样理解：每一个JavaScript对象（null除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型“继承”属性



// __proto__
// 这是每一个JavaScript对象（除了null）都具有的一个属性，叫 __proto__ , 这个属性会指向该对象的原型
function Person() {

}
var person = new Person()
// console.log(person.__proto__ === Person.prototype) // true



// constructor 
// 每个原型都有一个 constructor 属性指向关联的构造函数
function Person() {

}
// console.log(Person === Person.prototype.constructor) // true

// 综上我们得出
function Person() {

}
var person = new Person()
// console.log(person.__proto__ === Person.prototype) // true
// console.log(Person.prototype.constructor === Person) // true
// 顺便学习一个ES5的方法，可以获得对象的原型
// console.log(Object.getPrototypeOf(person) === Person.prototype) // true



// 实例与原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还找不到，就去原型的原型，一直找到最顶层为止
function Person() {

}
Person.prototype.name = 'Ace Yang'
var person = new Person()
person.name = 'Yang WuQi'
// console.log(person.name)

delete person.name
// console.log(person.name)
// 但是当我们删除了 person 的 name 属性时，读取的 person.name ,从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype 中查找，幸运的是我们找到了 name 属性，但是万一还没有找到呢？原型的原型又是什么呢？



// 原型的原型
// 在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：
var obj = new Object()
obj.name = 'Ace Yang'
// console.log(obj.name)



// 原型链
// 那 Object.prototype 的原型呢？
// console.log(Object.prototype.__proto__ === null) // true 
// 所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思，所以查找属性的时候查到 Object.prototype 就可以停止查找了



// 补充
// 最后，补充三点大家可能不会注意的地方

// constructor
// 首先是 constructor 属性，我们看个例子
function Person() {

}
var person = new Person()
// console.log(person.constructor === Person) // true
// 当获取 Person.constructor 时，其实 person 中并没有 constructor 属性，当不能读到 constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以 person.constructor === Person.prototype.constructor

// __proto__
// 其次是 __proto__，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于Person.prototype中，实际上，它来自于 Object.prototype, 与其说是一个属性，不如说是一个 getter/setter, 当使用 obj.__proto__, 可以理解成返回了 Object.getPrototypeOf(obj)

// 真的是继承吗？
// 最后是关于继承，前面我们讲到每一个对象都会从原型“继承”属性，实际上，继承是一个十分具有迷惑性的说法，继承意味着复制操作，然而 JavaScript 并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和方法，所以与其叫继承，委托的说法反而更准确些