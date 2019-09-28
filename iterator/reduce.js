function myReduce(callback, acc = 0) {
    if (!Array.isArray(this)) {
        throw new Error()
    }

    this.forEach((item, index) => {
        acc = callback(acc, item, index, this)
    })
    return acc
}

Array.prototype.myReduce = myReduce

var result = [1, 2, 3, 4].myReduce((acc, cur) => {
    return acc + cur
}, 20)

var result2 = ['a', 'b', 'c', 'd'].myReduce((acc, cur, index) => {
    acc[index] = cur
    return acc
}, {})

console.log(result)
console.log(result2)
