// 组合
// 公式： C(n,m) = A(n, m) / !m
//       C(n, 0) = 1
//       C(n, 1) = C(n, m - 1) = 1

function combination(arr, size) {
    const result = [];

    function group(a, b, n) {
        if (!n) {
            result.push(a);
            return;
        }
        for (let i = 0; i < b.length - n + 1; i++) {
            const remain = b.slice(i);
            const next = [...a, ...remain.splice(0, 1)];
            group(next, remain, n - 1);
        }
    }

    group([], arr.slice(), size);
    return result;
}

// C83 // 从八个里面选3个有多少个可能
const comb = combination([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log("从8个里面选3个有多少个可能:", comb.length);
console.log("组合分别是:", comb);
