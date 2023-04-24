import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setEmail } from "../../action/login.action.js";
import { setPassword } from "../../action/login.action.js";

export const Form = ({requestLogin}) => {

    const {email} = useSelector((state) => state.loginReducer);
    const { password } = useSelector((state) => state.loginReducer);
    const dispatch = useDispatch();
    
    const onEmailChange = (e) => {
        dispatch(setEmail(e.target.value))
    };

    const onPasswordChange = (e) => {
        dispatch(setPassword(e.target.value))
    };

    const onSubmitLoginForm = (e) => {
        e.preventDefault();

        requestLogin(email, password);
    };
    return (
        <form action="#" onSubmit={onSubmitLoginForm}>
            <input type="email" name="email" id="email" value={email} onChange={onEmailChange} placeholder="email" />
            <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} placeholder="password" />
            <button>Login</button>
        </form>
    )
}