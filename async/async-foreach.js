// async forEach
// way 1
const array = [1, 2, 3, 4, 5, 6];

async function asyncForeach1(arr, fn) {
    for (let num of await Promise.resolve(arr)) {
        await fn(num);
    }
}

asyncForeach1(array, function(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    });
});

// way2

async function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        await fn(arr[i]);
    }
}

forEach(array, function(val) {
    return new Promise(resolve => {
        setTimeout(async () => {
            console.log(val);
            resolve();
        }, 1000);
    });
});
