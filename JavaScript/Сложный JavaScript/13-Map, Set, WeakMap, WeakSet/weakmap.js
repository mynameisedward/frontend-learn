let obj = {name: 'weakmap'}

obj = null 

// console.log(obj) // Сборщик мусора удаляет объект {name: 'weakmap'}


const map = new WeakMap([
    [obj, 'obj data']
])
console.log(map.get(obj))
// get set delete has
// других полей и методов нетe

