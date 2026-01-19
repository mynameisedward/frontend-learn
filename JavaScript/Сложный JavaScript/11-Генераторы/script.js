function* strGenerator() {
    yield 'H'                 // yield Порционно выдает результат
    yield 'E'                 // yield Порционно выдает результат
    yield 'L'                 // yield Порционно выдает результат
    yield 'L'                 // yield Порционно выдает результат
    yield 'O'                 // yield Порционно выдает результат
}

const str = strGenerator()

