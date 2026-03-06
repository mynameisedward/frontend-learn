// ---------- Promise.any() ----------

const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000) )
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000))

Promise.any([promise1, promise2])
    .then((result) => {
        console.log(result)
    })