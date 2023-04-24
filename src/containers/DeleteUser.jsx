import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserListAction } from "../action/getUsers.action.js";
export const DeleteUser = ({id}) => {

    const { url } = useSelector((state) => state.getUsersReducer)
    const {userList} = useSelector((state) => state.getUsersReducer)
    const dispatch = useDispatch();


    const requestDelete = (id, url) => {
        fetch(`${url}api/${id}`, {
            method: 'DELETE'
        })
            .then(response => 
                response.status === 204
                    ? true
                    : false
            )
    }
    const onDeleteUser = (e) => {
        e.preventDefault();
        requestDelete(id, url);
        requestDelete 
            ? dispatch(deleteUserListAction(userList, id))
            : false
    }

    return (
        <button onClick={onDeleteUser}>Delete</button>
    )
}