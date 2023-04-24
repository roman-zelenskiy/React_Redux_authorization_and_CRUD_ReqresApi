import React from "react";
import { useDispatch } from "react-redux";

import { deleteToken } from "../../action/token.action.js";

export const LogOutBtn = () => {
    
    const dispatch = useDispatch();
    
    const onLogOut = () => {
        dispatch(deleteToken());
    }
    
    return (
        <button onClick={onLogOut}>LogOut</button>
    )
}