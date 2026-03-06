async function asyncFunction() {
    const response = await setTimeout(() => 'responseeee', 2000)

    console.log('ответ получен', response)
    return response
}


asyncFunction()