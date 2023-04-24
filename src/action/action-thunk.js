
export const updateUsersListAction = (url, page) => (dispatch) => {
    fetch(`${url}users?page=${page}`)
        .then(response => response.json())
        .then(response =>
            dispatch({
                type: "UPDATE_USERS_LIST",
                payload: response.data
            })
        )
}