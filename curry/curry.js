const currying = (fn, ...args) => {
    return args.length < fn.length // fn.length 拿到的是参数长度
        ? //参数长度不足时，重新柯里化该函数，等待接受新参数
          (..._args) => currying(fn, ...args, ..._args)
        : //参数长度满足时，执行函数
          fn(...args)
}

function sumFn(a, b, c) {
    return a + b + c
}
var sum = currying(sumFn)

console.log(sum(2)(3)(5)) //10
console.log(sum(2, 3, 5)) //10
console.log(sum(2)(3, 5)) //10
console.log(sum(2, 3)(5)) //10
