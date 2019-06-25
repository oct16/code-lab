Array.prototype.myMap = function(callback) {
    return this.reduce(function(pre, cur, index, array) {
        pre.push(callback(cur, index, array))
        return pre
    }, [])
}

let val = [1, 3, 5, 7, 9].myMap(function(item) {
    return item + 1
})
console.log(val)
