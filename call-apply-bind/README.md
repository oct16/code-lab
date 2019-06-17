## Implement your call(), bind(), apply()

### Function.prototype.call

```javascript
function showProfileMessage(message) {
    console.log(message, this.name)
}
const obj = {
    name: "Ankur Anand"
}
showProfileMessage.call(obj, "welcome ")
```

So if we analyze the basic principle of a call function from above, we notice these things.

-   Calling the prototype function call changes the pointing of this. i.e **Function call in the above became obj.showProfileMessage**
-   Whatever arguments we have passed to showProfileMessage.call should be passed to original showProfileMessage as arg1, arg2,... .
-   Does **not cause side effects to obj** and showProfileMessage Function, i.e calling call doesn’t modify the original obj or showProfileMessage by any mean.

```
showProfileMessage.myOwnCall(obj, "welcome ");
```

What happens when we call something like above, showProfileMessage is an object (Function is also an object in JavaScript) on which we are calling the method myOwnCall inherited from prototype, so inside our myOwnCall method currently the this variable will be pointing to the object that is showProfileMessage and this is what our function reference is, so we added a function referencing to showProfileMessage to new passed obj or this value from the myOwnCall with

```
someOtherThis.fnName = this;
```

final implementation

```javascript
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
```

### Function.prototype.apply

It’s very much same as call method with only difference being its takes an array like object as arguments. So without any further ado, let’s look at its complete implementation.

```javascript
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
```

### Function.prototype.bind

[MDN Polyfill]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill")

```javascript
if (!Function.prototype.bind)
    (function() {
        var ArrayPrototypeSlice = Array.prototype.slice
        Function.prototype.bind = function(otherThis) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
            }

            var baseArgs = ArrayPrototypeSlice.call(arguments, 1),
                baseArgsLength = baseArgs.length,
                fToBind = this,
                fNOP = function() {},
                fBound = function() {
                    baseArgs.length = baseArgsLength // reset to default base arguments
                    baseArgs.push.apply(baseArgs, arguments)
                    return fToBind.apply(fNOP.prototype.isPrototypeOf(this) ? this : otherThis, baseArgs)
                }

            if (this.prototype) {
                // Function.prototype doesn't have a prototype property
                fNOP.prototype = this.prototype
            }
            fBound.prototype = new fNOP()

            return fBound
        }
    })()
```
