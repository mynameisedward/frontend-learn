class Animal {
    constructor(options) {
        this.name = options.name,
        this.age = options.age,
        this.hasTail = options.hasTail
    }
}

const pet = new Animal({
    name: 'alex',
    age: 8,
    hasTail: true
})

console.log(pet)
