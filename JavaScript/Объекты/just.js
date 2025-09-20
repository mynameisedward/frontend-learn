let calculator = {
    read() {
        a = prompt('Введи первое число')
        b = prompt('Введи второе число')

        this.a = +a
        this.b = +b
    }, 
    sum() {
        alert(+this.a + +this.b)
    },
    mul() {
        alert(this.a * this.b)
    }
}