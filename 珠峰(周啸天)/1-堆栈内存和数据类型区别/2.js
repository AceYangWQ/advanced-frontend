console.log(parseInt('')) // NaN
console.log(Number('')) // 0
console.log(isNaN('')) // false
console.log(parseInt(null)) // NaN
console.log(Number(null)) // 0
console.log(isNaN(null)) // false
console.log(parseInt('12px')) // 12
console.log(Number('12px')) // NaN
console.log(isNaN('12px')) // true
console.log(parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null)) // 2.6number
console.log(isNaN(Number(!!Number(parseInt('0.8px'))))) // false
console.log(typeof !parseInt(null) + !isNaN(null)) // booleantrue
console.log(10 + false + undefined + [] + 'Tencent' + null + true + {}) // NaNTencentnulltrue[object Object]
// 特殊 NaN + [] => 'NaN'  []转数字 => 先转字符串，再转数字，转字符串时就进行字符串拼接了

let arr = [10.18, 0, 10, 25, 23]
arr = arr.map(parseInt)
console.log(arr)

// parseInt(value, radix)
// radix是进制，不写或者写0都是按照10处理（如果value是以ox开头，则默认是16）
// 进制取值范围：2~36，如果不在这之间，运行的结果是NaN
// 把value看做radix进制，最后把radix进制转换为十进制

// 把一个值转换为十进制
// 位权值: 个位：0 十位：1 ...

// 147（八进制）=> 十进制
// 1*8^2 + 4*8^1 + 7*8^0
