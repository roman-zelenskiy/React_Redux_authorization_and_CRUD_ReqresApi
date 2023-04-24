import React from "react";


export const UserInfo = ({user}) => {

    return (
        <div className="user_info">
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
            <img src={user.avatar} alt="avatar" />
        </div>
    )
}