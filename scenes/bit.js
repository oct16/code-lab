// 给定一个非空整数数组，除了某个元素只出现一次以外
// 其余每个元素均出现两次。找出那个只出现了一次的元素。

/**
 *
 * 只存在一次的数字
 */
function filterOnlyOnce(arr) {
    for (var i = 1; i < arr.length; i++) {
        // 如果被异或两次相同的值，那么还是等于本身
        arr[0] ^= arr[i]
    }
    return arr[0]
}

console.log(filterOnlyOnce([1, 2, 2]))

// /**
//  * ~相当于 取反 -1
//  */
// function hasItem(array, item) {
//     // return array.indexOf(item) !== -1
//     return !!~array.indexOf(item)
// }
// console.log(hasItem([2, 3, 4], 5))
