const myNumber = 17

localStorage.setItem('number', myNumber)    // Ключ и значение должны быть строками
// console.log(localStorage.getItem('number')) 



const person = {
    name: 'Edward',
    age: 17,
    status: 'student',
    PLT: 17,
}

localStorage.setItem('me', JSON.stringify(person))




window.addEventListener('storage', (event) => {
    console.log(event)
})