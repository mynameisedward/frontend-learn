// -------- call -----------------------------

const person = {
    name: "Johnathan",
    age: 20,
}

function sayHi(punctuation, age) {
    console.log(`Hi, I'm ${this.name} ` + punctuation)
    console.log(`I'm ${age} years old ${punctuation}`)
    console.log('--------------------')
}

sayHi.call(person, '!')



// ------------ apply --------------------------
sayHi.apply(person, ['!!!', '30'])





// ------------ bind  -----------------------------
const humanJack = {
    name: "Jack",
    married: true,  
    status: 'developer',
}
const greet = sayHi.bind(humanJack, 'yoyoyo', 44)
greet()

