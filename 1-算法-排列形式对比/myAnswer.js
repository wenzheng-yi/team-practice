/*
    给定两组长度不同的数组,比较两组数组的排列格式是否相同,相同则返回 true,不同则返回 false
    比如:
    ["a",1,"a",1],["b",2,"b",2] 两组数组的排列格式都为 abab 形式,返回 true
    ["c","c","c","e"],["f","f","2","g"] 第一组的格式为 aaab,第二组的格式为 aabc,返回 false
    ["j","1","j","2","c","c","a"],["b","3","b","4","l","l","i","a"] 第一组长度及格式与第二组不同，返回 false
*/

/*
  参考答案
  如果数组1和数组2的排列格式是相同的，那意味着，数组1和数组2对应位置上的值是一一对应的。
  比如，题目中的第一个例子。从左往右看，数组1的“a”对应着数组2的“b”，数组1的“1”对应的是数组2的“2”。
  再比如，题目中第二个例子。从左往右，数组1的“c”对应着数组2的“f”，但是在数组序列第2的位置，“c”对应着“2”，显然是不正确的。
*/

function isSameFormat(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        return false
    }
    let mapping = {}
    for (let i = 0; i < ary1.length; i++) {
        if (ary1[i] in mapping) {
            if (ary2[i] !== mapping[ary1[i]]) {
                return false
            }
        } else {
            mapping[ary1[i]] = ary2[i]
        }
    }
    return true
}

let a1 = ["a",1,"a",1]
let a2 = ["b",2,"b",2]
console.log(isSameFormat(a1,a2)) // expect true

let b1 = ["c","c","c","e"]
let b2 = ["f","f","2","g"]
console.log(isSameFormat(b1,b2))  // expect false

let c1 = ["j","1","j","2","c","c","a"]
let c2 = ["b","3","b","4","l","l","i","a"]
console.log(isSameFormat(c1,c2))  // expect false

let d1 = [1,2,3,4,5,6,7,8,9,10,10]
let d2 = [10,9,8,7,6,5,4,3,2,1,1]
console.log(isSameFormat(d1,d2))  // expect true

let e1 = [1,2,3,4,5,6,7,8,9,10,10]
let e2 = [10,9,8,7,6,5,4,3,2,1,0]
console.log(isSameFormat(e1,e2))  // expect false