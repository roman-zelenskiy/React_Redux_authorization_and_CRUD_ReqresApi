const initialState = {
    email: 'eve.holt@reqres.in',
    password: '',
    errorMessage: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_EMAIL": {
            state = {
                ...state,
                email: action.payload
            }
            break
        }
        case "SET_PASSWORD": {
            state = {
                ...state,
                password: action.payload
            }
            break;
        }
        case "SET_ERROR_MESSAGE": {
            state = {
                ...state,
                errorMessage: action.payload
            }
            break;
        }
    }
    return state
}  