const initialState = {
    token: localStorage.getItem('token'),
    addToken: null
};

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_TOKEN": {
            state = {
                ...state,
                token: action.payload,
                addToken: localStorage.setItem('token', action.payload)            }
            break;
        }
        case "DELETE_TOKEN": {
            state = {
                ...state,
                token: '',
                addToken: localStorage.removeItem('token')     
            }
            break;
        }
    }
    return state;
}