import React from "react";
import { useSelector } from "react-redux";

import { UserFormChange } from "../components/GetUsers/UserCard/UserFormChange.jsx";

export const ChangeUser = ({id, onToggleForm}) => {

    const {url} = useSelector((state) => state.getUsersReducer)

    const requestChenge = (id, user) => {
        fetch(`${url}users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.status >= 200 && response.status < 300
                ? true
                : false
            )
    };
    return (
        <UserFormChange requestChenge={requestChenge} onToggleForm={onToggleForm} id={id} />
    )
}