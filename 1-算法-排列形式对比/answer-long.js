/*
    给定两组长度不同的数组,比较两组数组的排列格式是否相同,相同则返回 true,不同则返回 false
    比如:
    ["a",1,"a",1],["b",2,"b",2] 两组数组的排列格式都为 abab 形式,返回 true
    ["c","c","c","e"],["f","f","2","g"] 第一组的格式为 aaab,第二组的格式为 aabc,返回 false

    ["j","1","j","2","c","c","a"],
    ["b","3","b","4","l","l","i","a"] 
    第一组长度及格式与第二组不同，返回 false
*/

function fnIsEqualArrayFormat(array1, array2) {
  if (array1?.length !== array2.length) {
    return false;
  }

  function ArrayFormatFlag(array) {
    /* 排除值排列不相同 */
    let valueFlag = {};
    let saveFormatFlag = "";
    let formatFlag = "abcdefg";

    array.forEach((item, i) => {
      if (valueFlag[item]) {
        saveFormatFlag += valueFlag[item];
      } else {
        valueFlag[item] = formatFlag.substring(0, 1);
        saveFormatFlag += valueFlag[item];
        formatFlag = formatFlag.substring(1);
      }
    });
    return saveFormatFlag;
  }

  let array1FormatFlag = ArrayFormatFlag(array1);
  console.log('array1FormatFlag', array1FormatFlag);

  let array2FormatFlag = ArrayFormatFlag(array2);
  console.log('array2FormatFlag', array2FormatFlag);

  return array1FormatFlag == array2FormatFlag
}

// let str1 = ["c", "c", "2", "e"]
// let str2 = ["f", "f", "2", "g"]
// console.log(fnIsEqualArrayFormat(str1, str2))

// let str3 =  ["j","1","j","2","c","c","a",'j']
// let str4 =  ["b","3","b","4","l","l","i","a"] 
// console.log(fnIsEqualArrayFormat(str3, str4))

let str5 = [1,2,3,4,5,6,7,9,9]
let str6 = [1,2,3,4,5,6,7,9,10]
console.log(fnIsEqualArrayFormat(str5, str6)) // expect false
