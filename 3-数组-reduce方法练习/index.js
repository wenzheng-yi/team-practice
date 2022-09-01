// 通过reduce方法输出题目所要求的结果

// 1.单纯的累加
const one = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]
function reduceOne(data) {}
console.log(reduceOne(one)) // 54

// 2.将数组内每个对象的每个value值进行累加
// 提示：需要用到Object.values, 可以复用reduceOne方法
const two = [
  { x: 1, y: 2, z: 3 }, // 6
  { a: 4, s: 5, d: 6, f: 7 }, // 22
  { q: 8, w: 9, e: 10, r: 11 }, // 38
]
function reduceTwo(data) {}
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
function findValByKeys(data, keys) {}
console.log(findValByKeys(data, findOne)) // 4
console.log(findValByKeys(data, findTwo)) // {e: 1}

// 4.将下列数组输出为一个对象
const ary = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
]
function createObj(data) {}
console.log(createObj(ary))

// 5.将数组中 数据值是字母 的数据序列号进行累加
// 提示，需要用到正则验证，数组中第2、3、7项是字母，累加起来则是12
const isW = [0, '1', 'a', 'c', 2, '3', '5', 'd']
function wIndSum(params) {}
console.log(wIndSum(isW)) // 12
