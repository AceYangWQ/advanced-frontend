// 前言
// 在前端开发中会遇到一些频繁的事件触发，比如：

// 1、window 的 resize、scroll
// 2、mousedown、mousemove
// 3、keyup、keydown

// 为此，我们举个示例代码来了解事件如何频繁的触发：
// 我们写个 index.html 文件：
var count = 1
var container = document.getElementById('container')
function getUserAction() {
  container.innerHTML = count++
}
container.onmousemove = getUserAction
// 从左边滑动右边就触发了 100 多次的 getUserAction 函数
// 因为这个例子很简单，所以浏览器完全反应的过来，可是如果是复杂的回调函数或是 ajax 请求呢？假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现。

// 为了解决这个问题，一般有两种解决方案：
// 1、debounce 防抖
// 2、throttle 节流

// 防抖
// 今天重点讲讲防抖的实现。
// 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

// 根据这段表述，我们可以写第一版的代码：

// 第一版
function debounce(func, wait) {
  var timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}
container.onmousemove = debounce(getUserAction, 1000)
// 现在随你怎么移动，反正你移动完 1000ms 内不再触发，我才执行事件。看看使用效果：
// 顿时就从 165 次降低成了 1 次!
// 棒棒哒，我们接着完善它。

// this
// 如果我们在 getUserAction 函数中 console.log(this)，在不使用 debounce 函数的时候， this 的值为：
// <div id="container"></div>
// 但是如果使用我们的 debounce 函数，this 就会指向 Window 对象！
// 所以我们需要将 this 指向正确的对象
// 我们修改下代码：

// 第二版
function debounce(func, wait) {
  var timeout
  return function () {
    var context = this
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context)
    }, wait)
  }
}
container.onmousemove = debounce(getUserAction, 1000)
// 现在 this 已经可以正确指向了。让我们看下个问题：

// event 对象
// JavaScript 在事件处理函数中会提供事件对象 event，我们修改下 getUserAction 函数
function getUserAction(e) {
  container.innerHTML = count++
  return e
}
// 如果我们不使用 debounce 函数，这里会打印 MouseEvent 对象，如图所示：
// 但是在我们实现的 debounce 函数中，却只会打印 undefined!
// 所以我们再修改一下代码

// 第三版
function debounce(func, wait) {
  var timeout

  return function () {
    var context = this
    var args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
container.onmousemove = debounce(getUserAction, 1000)
// 到此为止，我们修复了两个小问题：
// 1、this 指向
// 2、event 对象

// 立刻执行
// 这个时候，代码已经很是完善了，但是为了让这个函数更加完善，我们接下来思考一个新的需求
// 这个需求就是：
// 我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行
// 想想这个需求也是很有道理的嘛，那我们加个 immediate 参数判断是否是立刻执行

// 第四版
function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) {
        func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}
container.onmousemove = debounce(getUserAction, 1000, true)

// 返回值
// 此时注意一点，就是 getUserAction 函数可能是有返回值的，所以我们也要返回函数的执行结果，
// 但是当 immediate 为 false 的时候，因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，
// 最后再 return 的时候，值将会一直是 undefined，所以我们只在 immediate 为 true 的时候返回函数的执行结果。

// 第五版
function debounce(func, wait, immediate) {
  var timeout, result
  return function () {
    var context = this
    var args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
}
container.onmousemove = debounce(getUserAction, 1000, true)

// 取消
// 最后我们再思考一个小需求，我希望能取消 debounce 函数，比如说我 debounce 的时间间隔是 10 秒钟，
// immediate 为 true，这样的话，我只有等 10 秒后才能重新触发事件，现在我希望有一个按钮，点击后，取消防抖，这样我再去触发，就可以又立刻执行啦，是不是很开心？
// 为了这个需求，我们写最后一版的代码：

// 第六版
function debounce(func, wait, immediate) {
  var timeout, result
  var debounced = function () {
    var context = this
    var args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) {
        result = func.apply(context, args)
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
// 那么该如何使用这个 cancel 函数呢？依然是以上面的 demo 为例：
var count = 1
var container = document.getElementById('container')

function getUserAction(e) {
  container.innerHTML = count++
}

var setUseAction = debounce(getUserAction, 10000, true)

container.onmousemove = setUseAction

document.getElementById('button').addEventListener('click', function () {
  setUseAction.cancel()
})
