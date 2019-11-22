/**
 * 青蛙🐸跳一个n阶的楼梯，可以跳一步或者两步，有多少种跳法
 * 分析：
 * 一阶 可以跳 1
 * 二阶 可以跳 11   或 2
 * 三阶 可以跳 111  或 21 或 12
 * 四阶 可以跳 1111 或 211或 121 或 112 或 22
 *
 * 斐波那契数列 递推公式
 * 斐波那契：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
 * 本案例为：F(1)=1，F(2)=2, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）
 */
function jump1(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return jump1(n - 1) + jump1(n - 2);
}
// 比较耗费性能
console.time("jump1");
console.log(jump1(20));
console.timeEnd("jump1");

// 改进， 加缓存，
var cache = [0, 1, 2, 3];
function jump2(n) {
    if (n < cache.length) {
        return cache[n];
    } else {
        var result = jump2(n - 1) + jump2(n - 2);
        cache[n] = result;
        return result;
    }
}
console.time("jump2");
console.log(jump2(20));
console.timeEnd("jump2");
