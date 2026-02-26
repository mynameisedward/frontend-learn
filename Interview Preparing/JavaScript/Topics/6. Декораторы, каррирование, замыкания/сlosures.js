function outer() {
    let counter = 0;

    function inner() {
        counter++
        console.log(counter)
    }

    return inner
}


const increment = outer()

increment()
increment()
increment()


// Что происходит?
//    1. Функция outer создаёт переменную counter и функцию inner
//    2. Функция inner возвращается и присваивается в increment
//    3. Хотя outer завершила выполнение, inner сохраняет доступ к counter
//    4. При каждом вызове increment() используется одна и та же переменная counter