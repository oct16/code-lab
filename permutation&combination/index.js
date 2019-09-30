'use strict'
var str = '1234'

function perm(str) {
    if (str.length == 1) {
        return [str]
    }
    var result = []
    // 第一次遍历，解析字符串每一位
    for (var i = 0; i < str.length; i++) {
        var c = str[i]

        // 把自己从字符串抽出去，构造一个新的数字
        var newStr = str.substring(0, i) + str.substring(i + 1, str.length)

        // 新的数字重新去递归
        var l = perm(newStr)

        // 被抽出的字符串和新的字符串重新组合
        for (var j = 0; j < l.length; j++) {
            var tmp = c + l[j]
            result.push(tmp)
        }
    }
    return result
}

console.log(perm(str))
