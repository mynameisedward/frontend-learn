// избыточно
const multiply = (a, b) => {
    return a * b
}

// оптимально
const multiply2 = (a, b) => a * b


// -----------------------------------------------------

// Избыточно
const getUser = async (id) => {
    const response = await fetch(`/api/user/${id}`)
    return response
}

// оптимально
const getUser2 = (id) => fetch(`/api/user/${id}`)


// -----------------------------------------------------


// избыточно
const fetchUserData = async (userId) => {
    return await getUser(userId)
}

// оптимально
const fetchUserData2 = (userId) =>  getUser(userId)