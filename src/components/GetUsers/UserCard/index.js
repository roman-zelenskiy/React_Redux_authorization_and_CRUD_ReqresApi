import React, {useState} from "react";

import { UserInfo } from "./UserInfo.jsx";
import { ChangeUser } from "../../../containers/ChangeUser.jsx";
import { DeleteUser } from "../../../containers/DeleteUser.jsx";

export const UserCard = ({user}) => {
    const [toggleForm, setToggleFrom] = useState(false);
    const onToggleForm = () => {
        setToggleFrom(!toggleForm);
    };

    return (
        <div className="user">
            {!toggleForm
                ? <UserInfo user={user} />
                :false
            }
            <form action="#">
                {toggleForm
                    ? <ChangeUser id={user.id} onToggleForm={onToggleForm} />
                    : false
                }
                <div>
                    <button type="button" onClick={onToggleForm}>Change</button>
                    <DeleteUser id={user.id}/>
                </div>
            </form>
        </div>
    )
} 