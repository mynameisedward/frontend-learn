////////////// Spread //////////////

// Объединение или копирование массивов
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]


// Объединение или копирование объектов
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const combined = {...obj1, ...obj2}


// Передача элементов массива в функцию как отдельные аргументы
function sum(a, b, c) {
    return a + b + c
}
const values = [45, 83, 9]
sum(...values)





////////////// Rest //////////////

// Сбор аргументов функции в массив
function multiplier(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier)
}

multiplier(3, 2, 1, 6, 76, 33, 0)



// Деструктуризация массива
const [first, second, ...other] = [5, 1, 6, 3, 7, 0]


















