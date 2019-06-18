// 防抖函数: 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。

function debounce(fn, interval) {
    if (!fn || !interval) {
        throw Error("lack of arguments")
    }
    var timer = null

    return function() {
        var self = this
        var args = arguments
        clearTimeout(timer)

        timer = setTimeout(function() {
            fn.apply(self, args)
        }, interval)
    }
}

var fn = function(n) {
    console.log(n)
}
var dFn = debounce(fn, 800)

var timer = setInterval(function() {
    dFn(1)
}, 200)

setTimeout(() => clearInterval(timer), 2000)
