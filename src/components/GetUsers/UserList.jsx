import React, { Component } from "react";
import { useSelector } from "react-redux";

import { UserCard } from './UserCard'

export const UserList = () => {

    const {userList} = useSelector((state) => state.getUsersReducer)
    return (
        <div className="users">
            {
                userList.map(element => ( 
                    <UserCard user={element} />
                ))
            }
        </div>
    )
}