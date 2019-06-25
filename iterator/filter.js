Array.prototype.myFilter = function(callback) {
    return this.reduce(function(pre, cur, index, array) {
        var val = callback(cur, index, array)
        if (val) {
            pre.push(cur)
        }
        return pre
    }, [])
}

let val = [1, 3, 5, 7, 9].myFilter(function(item) {
    return item > 5 || item === 3
})
console.log(val)
