/**
 *  有一个n阶的楼梯
 *  每次可以跳1~n阶
 *  有多少种路线
 *
 *  思路
 *  已知 f(1) = 1
 *       f(2) = 2
 *       f(3) = 4
 *
 *  满足 f(n) = f(n-1) + f(n-2) + ... + f(1)
 *  带入 f(n-1) = f(n-2) + ... + f(1)
 *  可得 f(n) = 2 * f(n-1)
 */
var cache = [0, 1, 2, 4];
function step(n) {
    if (n < cache.length) {
        return cache[n];
    } else {
        var result = 2 * step(n - 1);
        cache[n] = result;
        return result;
    }
}

console.log(step(4));
