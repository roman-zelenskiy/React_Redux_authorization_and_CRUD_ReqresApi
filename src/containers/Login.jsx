import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { setErrorMessage } from "../action/login.action.js";
import { saveToken } from "../action/token.action.js";
import { updateUsersListAction } from "../action/action-thunk.js";

export const Login = () => {

    const dispatch = useDispatch();
    const {url} = useSelector((state) => state.getUsersReducer);
    const { page } = useSelector((state) => state.getUsersReducer);

    const requestLogin = (email, password) => {
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.token) {
                    dispatch(saveToken(response.token))
                    dispatch(setErrorMessage())
                    dispatch(updateUsersListAction(url, page))
                } else {
                    dispatch(setErrorMessage(response.error))
                }
            })
    };
    return (
        <LoginForm requestLogin={requestLogin} />
    )
}