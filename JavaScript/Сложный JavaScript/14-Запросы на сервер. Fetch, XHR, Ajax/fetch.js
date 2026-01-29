const url = 'https://dummyjson.com/users/1';
const urlForPost = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url, body = null) {
    return fetch(url)
}

sendRequest('GET', url)
    .then(data => {console.log(data)})
    .catch(err => console.log(err))

const body = {
    title: 'I bought a car',
    body: 'It was 7000$',
    userId: 25,
}

// sendRequest('POST', urlForPost, body) // Для POST-запроса передаем body
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
