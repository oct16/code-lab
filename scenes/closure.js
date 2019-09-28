/**
 * 利用闭包， 避免变量全局污染
 */
var handel = function() {
    var count = 0
    return function() {
        console.log(count++)
    }
}
window.addEventListener('click', handel())

/**
 * 避免异步方法错误引用
 */
for (var i = 0; i < 10; i++) {
    (function(k) {
        setTimeout(function() {
            console.log(k)
        })
    })(i)
}

/**
 * 简易模块化方案
 */

(function(global, name) {
    global[name] = (function() {
        function echo() {
            console.log('hello world')
        }
        return {
            echo,
        }
    })()
})(window, 'module1')
