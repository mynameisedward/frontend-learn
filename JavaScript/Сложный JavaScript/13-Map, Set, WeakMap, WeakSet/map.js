const map = new Map([
    ['name', 'Edward'],
    ['age', 17],
    ['status', 'student'],
])



// map.get('status') // Получить значение по ключу
// map.delete('age') // Удалить по ключу. Возвращает true/false
// map.has('age')    // Проверить есть ли свойство по ключу
// map.size          // Количество ключей в карте
// map.clear()       // Очистить весь объект


// ------------- Итерация по Map --------------

for(let [key, value] of map) { // Итерироваться по ключ-значению в Map
    console.log(key, value)
}

for(let val of map.values()) { // Итерироваться по значениям
    console.log(val)
}
 
for(let key of map.keys()) { // Итерироваться по ключам
    console.log(key)
}


map.forEach((val, key, map) => {
    console.log('Val: ' , val)
    console.log('Key: ' , key)
    console.log('Map: ', map)
})




// ------------------ Сделать массив из Map

let arr = [...map]      // Spread оператор

arr = Array.from(map)   // Array.from


// ------------------ Сделать объект из Map

const obj = Object.fromEntries(map.entries())






