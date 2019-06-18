// 函数节流: 指定时间间隔内只会执行一次任务；

function throttle(fn, interval) {
    if (!fn || !interval) {
        throw Error("lack of arguments")
    }

    var getTimer = function() {
        return interval + Date.now()
    }
    var timer = getTimer()
    return function() {
        if (Date.now() > timer) {
            fn.apply(this, arguments)
            timer = getTimer()
        }
    }
}

var fn = function(n) {
    console.log(n)
}
var tFn = throttle(fn, 500)

var timer = setInterval(function() {
    tFn(1)
}, 100)

setTimeout(() => clearInterval(timer), 5000)
