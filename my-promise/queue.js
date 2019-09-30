/**
 *
 * Promise Queue Demo
 */
var pQueue = function(arr) {
    var queue = Promise.resolve()

    // arr.forEach(i => {
    //     queue = queue.then(() => {
    //         return new Promise(resolve => {
    //             setTimeout(() => {
    //                 resolve(i)
    //             }, 1000)
    //         })
    //     }).then((i) => console.log(i))
    // })
    return arr.reduce((acc, cur) => {
        return (acc = acc
            .then(
                () =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve(cur)
                        }, 1000)
                    })
            )
            .then(i => console.log(i)))
    }, queue)
}

pQueue([1, 2, 3, 4, 5])
