import React from "react";

import { UserList } from "./UserList.jsx";
import { PaginationBtn } from "./PaginationBtn.jsx";
import { LogOutBtn } from "./LogOutBtn.jsx";
import { AddUsers } from "../../containers/AddUsers.jsx";

export const GetUsers = () => {


    return (
        <>
            <UserList /> 
            <PaginationBtn/>
            <AddUsers /> 
            <LogOutBtn/>
        </>       
    )
}