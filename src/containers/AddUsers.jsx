import React from "react";
import { AddUserForm } from "../components/GetUsers/AddUserForm.jsx";

export const AddUsers = ({addUserFunc, URL}) => {

    const requestUpdateAddUser = (user, url) => {
        fetch(`${url}users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.status >= 200 && response.status < 300
                ? true
                : false)
    }
    return (
        <AddUserForm requestUpdateAddUser={requestUpdateAddUser} />
    )
}