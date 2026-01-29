const url = 'https://dummyjson.com/users/1';
const urlForPost = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // Объект от класса XMLHTTPRequest

        xhr.open(method, url);             // Открываем с методом GET и url 

        xhr.responseType = 'json'         // Говорим что тип ответа должен быть JSON
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {              // Если успешный ответ от сервера 
            if(xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)     
            }
        }                      

        xhr.onerror = () => {             // Если будет ошибка
            reject(xhr.response)
        }
        
        xhr.send(JSON.stringify(body))                        // Отправляем запрос. Для POST-запроса передаем body
    })
}

// sendRequest('GET', url)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

const body = {
    title: 'I bought a car',
    body: 'It was 7000$',
    userId: 25,
}

sendRequest('POST', urlForPost, body) // Для POST-запроса передаем body
    .then(data => console.log(data))
    .catch(err => console.log(err))




