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

// 返回数组为size的所有的排列组合

function groupSplit(arr, size) {
    const result = [];

    function group(tempArr, remainArr, n) {
        if (n === 0) {
            return result.push(tempArr);
        }
        for (let i = 0; i <= remainArr.length - n; i++) {
            const remain = remainArr.slice(i);
            const cur = [...tempArr, ...remain.splice(0, 1)];
            group(cur, remain, n - 1);
        }
    }
    group([], arr, size);
    return result;
}
console.log(groupSplit([1, 2, 3, 4, 5], 3));
