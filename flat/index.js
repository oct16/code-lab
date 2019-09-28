function flat(arr) {
    var array = arr.slice()
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(arr[i])) {
            array.splice(i, 1, ...flat(arr[i]))
        }
    }
    return array
}

console.log(flat([1, 2, [3, [4, [8, 9, 10]]], 5]))
