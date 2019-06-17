Function.prototype.myOwnCall = function(someOtherThis) {
    someOtherThis = someOtherThis || global
    var uniqueID = "00" + Math.random()
    while (someOtherThis.hasOwnProperty(uniqueID)) {
        uniqueID = "00" + Math.random()
    }
    someOtherThis[uniqueID] = this
    const args = []
    // arguments are saved in strings, using args
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push("arguments[" + i + "]")
    }

    // strings are reparsed into statements in the eval method
    // Here args automatically calls the Array.toString() method.
    var result = eval("someOtherThis[uniqueID](" + args + ")")
    delete someOtherThis[uniqueID]
    return result
}

showProfileMessage.myOwnCall(obj, "welcome ")
