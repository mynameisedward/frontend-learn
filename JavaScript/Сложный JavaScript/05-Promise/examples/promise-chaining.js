const promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(1), 2000)

}).then((result) => {
    alert(result)
    return result * 2  
}).then((result) => {
    alert(result)
    return result * 2
}).then((result) => {
    alert(result)
    return result * 2
})



// Всё это работает потому, что then() тоже возвращает промис, на котором мы тоже можем вызвать then()

// Ошибка новичков: делать несколько promise.then() к одному промису, получается не цепочка

