const FORM_ACTIONS = { // вынести типы экшн-ов в константы, потому что можно неправильно написать строку
    setName: "setName",
    setText: "setText",
    setRating: "setRating"
}


const reducer = (state, action) => {
    switch(action.type) {
        case FORM_ACTIONS.setName:
            return { name: action.payload.name, text: "", rating: 0 }; // Возвращаем новый объект нового состояния
        case FORM_ACTIONS.setText:
            return { ...state, text: action.payload.text };
        case FORM_ACTIONS.setRating:
            return { ...state, rating: action.payload.rating };
        default:
            return state;
    }
}
