const obj = {
    name: "oct16",
    age: 20,
    cars: ["mini", "beetle"]
}

const array = [1, 2, 3, obj]

function shallowCloneAssign(obj) {
    return Object.assign({}, obj)
}
function shallowCloneSpread(obj) {
    return { ...obj }
}
function shallowCloneArray(arr) {
    return arr.slice()
}

module.exports = shallowCloneAssign

// console.log(shallowCloneAssign(obj))
// console.log(shallowCloneSpread(obj))
// console.log(shallowCloneArray(array))
