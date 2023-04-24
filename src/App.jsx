import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetUsers } from "./components/GetUsers";
import { saveToken } from "./action/token.action.js";
import {Login} from './containers/Login.jsx'
import {updateUsersListAction} from './action/action-thunk.js'


export const App = () => {
    const { token } = useSelector((state) => state.tokenReducer)
    const { page } = useSelector((state) => state.getUsersReducer)
    const { url } = useSelector((state) => state.getUsersReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUsersListAction(url, page));
    }, [page, token]);


    return (
        <>
            {!token
                ? <Login />
                :<GetUsers /> 
            }
        </>
    )
}