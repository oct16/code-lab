function bubbleSort(array) {
    const len = array.length
    for (var i = 0; i < len; i++) {
        for (var j = i; j < len; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j)
            }
        }
    }
    return array
}

/**
 * 对象交换
 */
function swap(arr, i, j) {
    // a = {a:b, b:a}
    // b = a.b
    // a = b.a

    arr[i] = {a: arr[j], b: arr[i]}
    arr[j] = arr[i].b
    arr[i] = arr[i].a
}

/**
 * 数组交换
 */
// function swap(arr, i, j) {
//     arr[i] = [arr[j], arr[j] = arr[i]][0]
// }

/**
 * 解构赋值交换
 */
// function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// }

/**
 * 异或交换
 */
// function swap(arr, i, j) {
//     arr[i] = arr[i] ^ arr[j]
//     arr[j] = arr[i] ^ arr[j]
//     arr[i] = arr[i] ^ arr[j]
// }

/**
 * 异或交换简写
 */
// function swap(arr, i, j) {
//     // a = (b^=a^=b)^a;
//     arr[i] = (arr[j] ^= arr[i] ^= arr[j]) ^ arr[i]
// }

/**
 * 变量交换
 */
// function swap(array, i, j) {
//     var temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
// }

console.log(bubbleSort([1, 4, 5, 6, 2, 3]))
