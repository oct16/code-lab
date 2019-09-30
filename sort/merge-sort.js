function mergeSort(left, right) {
    if (!Array.isArray(left) || !Array.isArray(right)) {
        throw new Error('params error')
    }

    var result = []

    var leftIndex = 0
    var rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++])
        } else {
            result.push(right[rightIndex++])
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex++])
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex++])
    }
    return result
}

console.log(mergeSort([2, 3, 4, 6, 7, 8, 9], [1, 5, 10]))
