// Обычная функция
function add(a, b, c) {
    return a + b + c
}


// Каррированная
const curriedAdd = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}


