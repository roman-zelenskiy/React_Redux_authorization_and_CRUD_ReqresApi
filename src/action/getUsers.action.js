export const nextPageAction = () => {
    return {
        type: "NEXT_PAGE"        
    }
}
export const prevPageAction = () => {
    return {
        type: "PREV_PAGE"        
    }
}
export const changeUserListAction = (userList, updatedUser) => {
    return {
        type: "CHANGE_USER_LIST",
        payload: userList.map((user) => {
            if (user.id === updatedUser.id) {
                user = updatedUser;
            }
            return user;
        })
    }
};
export const deleteUserListAction = (userList, id) => {
    return {
        type: "DELETE_USER_LIST",
        payload: userList.filter((user) => user.id !== id)
    }
}
export const addUserAction = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}
