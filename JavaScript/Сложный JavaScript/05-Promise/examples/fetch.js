fetch('/article/promise-chaining/user.json')
    .then((response) => {
        return response.text()
    })
    .then((text) => {
        alert(text)
    })


// тоже самое, только преобразовываем из JSON в объект JavaScript
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name))


// тоже самое, только с помощью ответа, посылаем запрос на GitHub
fetch('/article/promise-chaining/user.json')
    .then(response => response.json()) // достаем объект пользователя
    .then(user => fetch(`https://api.github.com/users/${user.name}`)) // посылаем запрос на GitHub с именем пользователя
    .then(response => response.json()) // преобразование полученного json в обычный объект





