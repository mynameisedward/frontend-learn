// ---------- Promise.race() ----------

const firstOk = new Promise((resolve, reject) => setTimeout(() => resolve(1), 6000))
const secondOk = new Promise((resolve, reject) => setTimeout(() => resolve(2), 4000))
const thirdErr = new Promise((resolve, reject) => setTimeout(() => reject("Errrrr"), 2000))

Promise.race([firstOk, secondOk, thirdErr])
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })