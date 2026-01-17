// Objects
const person = {
    name: 'Edward',
    age: 17,
    status: 'Student'
}

const objectProxy = new Proxy(person, {
    get(target, prop) {
        return target[prop]
    }
})