const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('first'), 2000))
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('second'), 4000))
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('ERRRR'), 6000))

Promise.allSettled([promise1, promise2, promise3])
    .then((result) => {
        console.log(result)
    })