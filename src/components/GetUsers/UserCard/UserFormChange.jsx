import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeUserListAction } from "../../../action/getUsers.action.js";
export const UserFormChange = ({requestChenge, onToggleForm, id}) => {

    const [first_name, setFirst_name] = useState('')
    const [ last_name, setLast_name ] = useState('')
    const [ email, setEmail ] = useState('')
    const [avatar, setAvatar] = useState('')

    const dispatch = useDispatch();
    const {userList} = useSelector((state) => state.getUsersReducer)

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

    const onChangeUser = (e) => {
        e.preventDefault();
        requestChenge(id,{
            first_name,
            last_name,
            email,
            avatar
        })
        if (requestChenge) {
            dispatch(changeUserListAction(userList,
                {
                    id,
                    first_name,
                    last_name,
                    email,
                    avatar
                }
            ))
            onToggleForm();
        }
    }   
    return (
        <div className="hidden_form">
            <input type="text" value={first_name} onChange={onFirstNameChange} name="firdt_name" id={`first_name${id}`} placeholder="First name" />
            <input type="text" value={last_name} onChange={onLastNameChange} name="last_name" id={`last_name${id}`} placeholder="Last name"/>
            <input type="text" value={email} onChange={onEmailtChange} name="email" id={`email${id}`} placeholder="email" />
            <input type="text" value={avatar} onChange={onAvatarChange} name="avatar" id={`avatar${id}`} placeholder="avatar" />
            <button onClick={onChangeUser}>Save</button>
        </div>
    )
}