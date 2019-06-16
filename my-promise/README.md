# How to implement a Promise

## State Machine

```javascript
var PENDING = Symbol("pending")
var FULFILLED = Symbol("fulfilled")
var REJECTED = Symbol("rejected")

function Promise() {
    // store state which can be PENDING, FULFILLED or REJECTED
    var state = PENDING

    // store value or error once FULFILLED or REJECTED
    var value = null

    // store sucess & failure handlers attached by calling .then or .done
    var handlers = []
}
```

## Transitions

```javascript
// the key transitions that can occur, fulfilling and rejecting

// basic low level transitions
function fulfill(result) {
    state = FULFILLED
    value = result
}

function reject(error) {
    state = REJECTED
    value = error
}

// higher-level transition
function resolve(result) {
    try {
        var then = getThen(result)
        if (then) {
            doResolve(then.bind(result), resolve, reject)
            return
        }
        fulfill(result)
    } catch (e) {
        reject(e)
    }
}
```

How resolve accepts either a promise or a plain value and if it's a promise?
A promise must never be fulfilled with another promise.
We have used a couple of helper methods

```javascript
function getThen(value) {
    var t = typeof value
    if (value && (t === "object" || t === "function")) {
        var then = value.then
        if (typeof then === "function") {
            return then
        }
    }
    return null
}

function doResolve(fn, onFulfilled, onRejected) {
    var done = false
    try {
        fn(
            function(value) {
                if (done) return
                done = true
                onFulfilled(value)
            },
            function(reason) {
                if (done) return
                done = true
                onRejected(reason)
            }
        )
    } catch (ex) {
        if (done) return
        done = true
        onRejected(ex)
    }
}
```

## Constructing

expose either a method of resolving the promise or of observing it.

```
  doResolve(fn, resolve, reject);

```

As you can see, we re-use doResolve because we have another untrusted resolver. The fn is allowed to call both resolve and reject multiple times, and even throw exceptions. It is up to us to ensure that the promise is only resolved or rejected once, and then never transitions into a different state ever again.

## Observing

Our goal here is to implement `promise.done(onFulfilled, onRejected)` such that:

-   only one of onFulfilled or onRejected is called
-   it is only called once
-   it is never called until the next tick (i.e. after the .done method has returned)
-   it is called regardless of whether the promise is resolved before or after we call .done

```javascript
function handle(handler) {
    if (state === PENDING) {
        handlers.push(handler)
    } else {
        if (state === FULFILLED && typeof handler.onFulfilled === "function") {
            handler.onFulfilled(value)
        }
        if (state === REJECTED && typeof handler.onRejected === "function") {
            handler.onRejected(value)
        }
    }
}

this.done = function(onFulfilled, onRejected) {
    // ensure we are always asynchronous
    setTimeout(function() {
        handle({
            onFulfilled: onFulfilled,
            onRejected: onRejected
        })
    }, 0)
}
```

implement .then that construct a new Promise in the process.

```javascript
this.then = function(onFulfilled, onRejected) {
    var self = this
    return new Promise(function(resolve, reject) {
        return self.done(
            function(result) {
                if (typeof onFulfilled === "function") {
                    try {
                        return resolve(onFulfilled(result))
                    } catch (ex) {
                        return reject(ex)
                    }
                } else {
                    return resolve(result)
                }
            },
            function(error) {
                if (typeof onRejected === "function") {
                    try {
                        return resolve(onRejected(error))
                    } catch (ex) {
                        return reject(ex)
                    }
                } else {
                    return reject(error)
                }
            }
        )
    })
}
```
