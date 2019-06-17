Function.prototype.myOwnApply = function(someOtherThis, arr) {
    someOtherThis = someOtherThis || global
    var uniqueID = "00" + Math.random()
    while (someOtherThis.hasOwnProperty(uniqueID)) {
        uniqueID = "00" + Math.random()
    }
    someOtherThis[uniqueID] = this

    var args = []
    var result = null
    if (!arr) {
        result = someOtherThis[uniqueID]()
    } else {
        for (let i = 1, len = arr.length; i < len; i++) {
            args.push("arr[" + i + "]")
        }
        result = eval("someOtherThis[uniqueID](" + args + ")")
    }

    delete someOtherThis[uniqueID]
    return result
}
