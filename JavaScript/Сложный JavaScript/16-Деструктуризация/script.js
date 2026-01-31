// -------------- Массивы --------------
function calcValues(a, b) {
    return [
        a + b, 
        a - b,
        a * b, 
        a / b,
    ]
}

const [sum, diff, mult = 'Умножения нет', ...other] = calcValues(52, 52)

// console.log(sum, diff)




// -------------- Объекты --------------
const person = {
    name: "Edward",
    age: 17,
    address: {
        country: "Russia",
        city: "Moscow"
    }
}

const {name, ...info} = person

console.log(name, info)




