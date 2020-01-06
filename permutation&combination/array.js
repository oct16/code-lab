var permutation = function(nums) {
    const result = [];
    function permutation(arr, m = []) {
        if (!arr.length) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const cur = arr.slice();
                const next = cur.splice(i, 1);
                permutation(cur, [...m, ...next]);
            }
        }
    }

    permutation(nums);
    return result;
};

// 遍历数组，移动一项，重新递归，收集结果

console.log(permutation([1, 2, 3]));
// [
//     [ 1, 2, 3 ],
//     [ 1, 3, 2 ],
//     [ 2, 1, 3 ],
//     [ 2, 3, 1 ],
//     [ 3, 1, 2 ],
//     [ 3, 2, 1 ]
// ]
