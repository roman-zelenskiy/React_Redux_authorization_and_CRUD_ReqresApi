import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Form } from "./Form.jsx";

export const LoginForm = ({requestLogin}) => {

    const {errorMessage} = useSelector((state) => state.loginReducer)


    return (
        <div className="login_form">
            <Form requestLogin={requestLogin} />
            {
                errorMessage 
                    ? <p>{errorMessage}</p>
                    : false
            }
        </div>
    )
}