// 前言
// 在开发中，我们经常会遇到在数组中查找指定元素的需求，可能大家觉得这个需求过于简单，
// 然而如何优雅的去实现一个 findIndex 和 findLastIndex、indexOf 和 lastIndexOf
// 方法却是很少人去思考的。本文就带着大家一起参考着 underscore 去实现这些方法。

// findIndex
// ES6对数组新增了 findIndex 方法，它会返回数组中满足提供的函数的第一个元素的索引，否则返回 -1

// 举个例子
// function isBigEnough(element) {
//   return element >= 15
// }
// console.log([12, 5, 8, 130, 44].findIndex(isBigEnough)) // 3

// findIndex 会找出第一个大于 15 的元素的下标，所以最后返回 3。
// 是不是很简单，其实，我们自己去实现一个 findIndex 也很简单。

// 实现 findIndex
// 思路自然很明了，遍历一遍，返回符合要求的值的下标即可

// function findIndex(array, predicate, context) {
//   for (var index = 0; index < array.length; index++) {
//     if (predicate.call(context, array[index], index, array)) {
//       return index
//     }
//   }
//   return -1
// }
// console.log(
//   findIndex([1, 2, 3, 4], function (item, index, array) {
//     if (item === 2) {
//       return true
//     }
//   })
// ) // 1

// findLastIndex
// findIndex 是正序查找，但正如 indexOf 还有一个对应的 lastIndexOf 方法，我们也想写一个倒序查找的 findLastIndex 函数。实现自然也很简单，只要修改下循环即可。

// function findLastIndex(array, predicate, context) {
//   var length = array.length
//   for (var index = length - 1; index >= 0; index--) {
//     if (predicate.call(context, array[index], index, array)) {
//       return index
//     }
//   }
//   return -1
// }
// console.log(
//   findLastIndex([1, 2, 3, 4], function (item, index, array) {
//     if (item === 3) {
//       return true
//     }
//   })
// ) // 2

// createIndexFinder
// 然而问题在于，findIndex 和 findLastIndex 其实有很多重复的部分，如何精简冗余的内容呢？这便是我们要学习的地方，日后面试问到此类问题，也是加分的选项。
// underscore 的思路就是利用传参的不同，返回不同的函数。这个自然是简单，但是如何根据参数的不同，在同一个循环中，实现正序和倒序遍历呢？
// 让我们直接模仿 underscore 的实现：

function createIndexFinder(dir) {
  return function (array, predicate, context) {
    var length = array.length
    var index = dir > 0 ? 0 : length - 1
    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) {
        return index
      }
    }
    return -1
  }
}

var findIndex = createIndexFinder(1)
var findLastIndex = createIndexFinder(-1)

// console.log(
//   findIndex([1, 2, 3, 4], function (item, index, array) {
//     if (item === 2) {
//       return true
//     }
//   })
// ) // 1

// console.log(
//   findLastIndex([1, 2, 3, 4], function (item, index, array) {
//     if (item === 3) {
//       return true
//     }
//   })
// ) // 2

// sortedIndex
// findIndex 和 findLastIndex 的需求算是结束了，但是又来了一个新需求：在一个排好序的数组中找到 value 对应的位置，保证插入数组后，依然保持有序的状态。

// 假设该函数命名为 sortedIndex，效果为：
// sortedIndex([10, 20, 30], 25); // 2

// 也就是说如果，注意是如果，25 按照此下标插入数组后，数组变成 [10, 20, 25, 30]，数组依然是有序的状态

// 那么这个又该如何实现呢？
// 既然是有序的数组，那我们就不需要遍历，大可以使用二分查找法，确定值的位置。让我们尝试着去写一版：

// 第一版
function sortedIndex(array, obj) {
  var low = 0,
    high = array.length
  while (low < high) {
    var mid = Math.floor((low + high) / 2)
    if (array[mid] < obj) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}

console.log(sortedIndex([10, 20, 30, 40, 50], 35))
