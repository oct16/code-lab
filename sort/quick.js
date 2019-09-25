function quickSort(arr) {
    const len = arr.length
    if (len <= 1) {
        return arr
    }
    const pivotIndex = Math.floor(len / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]

    const left = []
    const right = []
    for (let i = 0; i < len - 1; i++) {
        const item = arr[i]
        if (item <= pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort([1, 4, 5, 6, 2, 3]))
