import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../action/getUsers.action.js";

export const AddUserForm = ({requestUpdateAddUser}) => {
    const [first_name, setFirst_name] = useState('')
    const [ last_name, setLast_name ] = useState('')
    const [ email, setEmail ] = useState('')
    const [avatar, setAvatar] = useState('')
    
    const dispatch = useDispatch();

    const onFirstNameChange = (e) => {
        setFirst_name(e.target.value)
    }
   
    const onLastNameChange = (e) => {
        setLast_name(e.target.value)
    }
    const onEmailtChange = (e) => {
        setEmail(e.target.value)
    }
    const onAvatarChange = (e) => {
        setAvatar(e.target.value)
    }

    const onAddUser = (e) => {
        e.preventDefault();
        requestUpdateAddUser({
            first_name,
            last_name,
            email,
            avatar
        });
        if (requestUpdateAddUser) {
        dispatch(addUserAction({
            first_name,
            last_name,
            email,
            avatar
        }));
        setFirst_name('')
        setLast_name('')
        setEmail('')
        setAvatar('')
        }
    }

    
    return (
        <form action="#" onSubmit={onAddUser}>
            <div className="input_user">
                <input placeholder="First name" value={first_name} onChange={onFirstNameChange} type="text" name="first_name" id="first_name" />
                <input placeholder="Last name" value={last_name} onChange={onLastNameChange} type="text" name="last_name" id="last_name" />
                <input placeholder="Email" value={email} onChange={onEmailtChange} type="email" name="email" id="email" />
                <input placeholder="Avatar" value={avatar} onChange={onAvatarChange} type="text" name="avatar" id="avatar" />
            </div>
            <button id="btn_saveuser">Add User</button>
        </form>
    )
}