const set = new Set([1, 2, 3, 3, 2, 4, 5, 5, 6])

// set.add(10).add(20).add(30).add(20)    // Добавить значение
// set.has(3)         // Проверить, есть ли значение
// set.size           // Кол-во элементов
// set.delete(10)     // Удалить элемент
// set.clear()        // Очистить сет



// -----------------------------

console.log(set.values()) // Значения
console.log(set.keys())   // Значения

set.entries()             // Объект массивов [значение, значение]


// -----------------------------

for(let val of set) {
    console.log(val)
}






