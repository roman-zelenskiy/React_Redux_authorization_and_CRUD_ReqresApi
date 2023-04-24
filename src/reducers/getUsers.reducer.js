const initialState = {
    url: 'https://reqres.in/api/',
    page: 1,
    userList: []
}

export const getUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_PAGE": {
            state = {
                ...state,
                page: state.page === 1
                    ? state.page + 1
                    : state.page
            }
            break;
        }
        case "PREV_PAGE": {
            state = {
                ...state,
                page: state.page === 2 
                    ? state.page - 1
                    : state.page
            }
            break;
        }
        case "UPDATE_USERS_LIST": {
            state = {
                ...state,
                userList: action.payload
            }
            break;
        }
        case "CHANGE_USER_LIST": {
            state = {
                ...state,
                userList: action.payload
            }
            break;
        }
        case "DELETE_USER_LIST": {
            state = {
                ...state,
                userList: action.payload
            }
            break;
        }
        case "ADD_USER": {
            state = {
                ...state,
                userList: [...state.userList ,action.payload]
            }
        break;
        }
    }
    return state;
}
