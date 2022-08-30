// 二、数据类型和基础知识作业

// 1.
// let result =
//   100 + true + 21.2 + null + undefined + 'Tencent' + [] + null + 9 + false
// console.log(result) // NaNTencentnull9false

// 2.
// {} + 0 ? console.log('ok') : console.log('no') // no
// 0 + {} ? console.log('ok') : console.log('no') // ok

// 3.
// let res = Number('12px') // NaN
// if (res === 12) {
//   console.log(200)
// } else if (res === NaN) {
//   console.log(NaN)
// } else if (typeof res === 'number') {
//   console.log('number') // number
// } else {
//   console.log('Invalid Number')
// }

// 4.
// let arr = [27.2, 0, '0013', '14px', 123]
// arr = arr.map(parseInt)
// console.log(arr) // [27, NaN, 1, 1, 27]

// parseInt(value, radix) 第二个参数范围 2~36
// + 不写或者0都是按照10处理，如果是0x，则按照16处理
// + value按照radix进制 转换为10进制

// parseInt(27.2, 0) // 27
// parseInt(0, 1) // NaN
// parseInt('0013', 2) // 1
// parseInt('14px', 3) // 1
// parseInt(123, 4) //  1*4^2 + 2*4^1 + 3*4^0 = 27
