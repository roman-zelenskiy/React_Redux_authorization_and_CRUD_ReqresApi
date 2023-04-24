import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { nextPageAction } from "../../action/getUsers.action.js";
import { prevPageAction } from "../../action/getUsers.action.js";

export const PaginationBtn = () => {

    const { page } = useSelector((state) => state.getUsersReducer)
    const dispatch = useDispatch();

    const onPrevClick = () => {
        dispatch(prevPageAction())
    }
    const onNextClick = () => {
        dispatch(nextPageAction())
    }
    return (
        <div className="pagination">
            <button onClick={() => onPrevClick()}>Prev</button>
            <button onClick={() => onNextClick()}>Next</button>
        </div>
    )
}