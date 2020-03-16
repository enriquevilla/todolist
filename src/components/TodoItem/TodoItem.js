import React, {useState} from "react";
import "./TodoItem.css";

let TodoItem = (props) => {
    return (
        <div className={(props.last) && "last"}>
            <input type="checkbox" checked={props.complete}/>
            <span className="todo-text">
                {props.text}
            </span>
        </div>
    )
}

export default TodoItem;