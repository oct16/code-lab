// 二维数组的全排列组合

// 思路

function perm(arr, n, r) {
    for (var i = 0; i < arr[i].length; i++) {
        if (n === 0) {
            r = [];
        }
        if (n < arr.length) {
            var _r = r.slice();
            _r.push(arr[n][i]);
        }

        if (n === arr.length - 1) {
            console.log(_r);
        } else {
            perm(arr, n + 1, _r);
        }
    }
}
// 测试：
var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
perm(arr, 0);

// [ 1, 3, 5 ]
// [ 1, 3, 6 ]
// [ 1, 4, 5 ]
// [ 1, 4, 6 ]
// [ 2, 3, 5 ]
// [ 2, 3, 6 ]
// [ 2, 4, 5 ]
// [ 2, 4, 6 ]
