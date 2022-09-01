// 通过reduce方法输出题目所要求的结果
// 1.单纯的累加
const one = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]
function reduceOne(data) {
  return data.reduce((pre, cur) => pre + cur)
}
console.log(reduceOne(one)) // 54
// 2.将数组内每个对象的每个value值进行累加
const two = [
  { x: 1, y: 2, z: 3 }, // 6
  { a: 4, s: 5, d: 6, f: 7 }, // 22
  { q: 8, w: 9, e: 10, r: 11 }, // 38
]
function reduceTwo(data) {
  return data.reduce((pre, cur) => {
    return pre + reduceOne(Object.values(cur))
  }, 0)
}
console.log(reduceTwo(two)) // 66
// 3.通过序列号进行数据查询
const data = {
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
        f: 2,
      },
      g: 3,
    },
    h: 4,
  },
  j: 5,
}
const findOne = ['a', 'h']
const findTwo = ['a', 'b', 'c', 'd']
function findValByKeys(data, keys) {
  return keys.reduce((pre, cur) => {
    return pre[cur]
  }, data)
}
console.log(findValByKeys(data, findOne)) // 4
console.log(findValByKeys(data, findTwo)) // {e: 1}
// 4.将下列数组输出为一个对象
const ary = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
]
function createObj(data) {
  return data.reduce((pre, cur) => {
    pre[cur[0]] = cur[1]
    return pre
  }, {})
}
console.log(createObj(ary))
// 5.将数组中数据值是字母的序列号进行累加
const isW = [0, '1', 'a', 'c', 2, '3', '5', 'd']
function wIndSum(params) {
  return params.reduce((pre, cur, curIndex) => {
    return pre + (/[a-z]/.test(cur) ? curIndex : 0)
  }, 0)
}
console.log(wIndSum(isW)) // 12
