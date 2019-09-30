/**
 * 并发的Promise队列简易实现版
 * Retry
 * @class ConcurrencyQueue
 */
class ConcurrencyQueue {
    constructor() {
        this.currency = 3
        this.process = 0
        this.maxRetry = 1
        this.queue = []
    }

    add(...tasks) {
        this.queue = this.queue.concat(tasks)
        this.exec()
    }

    exec() {
        while (this.process < this.currency) {
            this.run()
        }
    }

    done() {
        this.process--
        console.log('finish one')
        this.exec()
    }
    retry(task) {
        console.log('retry')
        if (!task['retryTimes']) {
            task['retryTimes'] = 0
        }
        if (task['retryTimes'] >= this.maxRetry) {
            this.error()
        } else {
            task['retryTimes']++
            this.queue.push(task)
        }
    }

    error() {
        console.log('retry ', ' error')
    }

    run() {
        this.process++
        const task = this.queue.shift()
        if (!task) return

        task()
            .then(() => {
                this.done()
            })
            .catch(() => {
                console.log('error')
                this.retry(task)
            })
    }
}

const c = new ConcurrencyQueue()
const task = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve(1) : reject(0)
        }, 1000)
    })
}
c.add(task, task, task, task, task, task, task, task, task, task, task, task)
