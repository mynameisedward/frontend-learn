const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 3000))
const promise3 = new Promise((resolve, reject) => setTimeout(reject('ERRRR'), 10000))

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

