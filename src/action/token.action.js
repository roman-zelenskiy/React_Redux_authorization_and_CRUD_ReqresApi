export const saveToken = (token) => {
    return {
        type: "SAVE_TOKEN",
        payload: token 
    }
}
export const deleteToken = () => {
    return {
        type: "DELETE_TOKEN",
    }
}