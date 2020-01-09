// 多个数组相互组合的结果

function combinationArray(arr) {
    // arr is the two-dimensional array
    let results = [];
    let result = [];

    function group(arr, i) {
        for (let j = 0; j < arr[i].length; j++) {
            result[i] = arr[i][j];
            if (i === arr.length - 1) {
                results.push(result.join(","));
            } else {
                group(arr, i + 1);
            }
        }
    }
    group(arr, 0);
    return results;
}

console.log(
    combinationArray([
        [1, 2, 3],
        ["a", "b", "c"],
        ["$", "#"]
    ])
);
