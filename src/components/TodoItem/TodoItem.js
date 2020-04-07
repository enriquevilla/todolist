import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
    let textClass = "todo-text";
    textClass += props.item.complete ? " complete" : "";
    return (
        <div className={(props.item.last) ? "last" : null}>
            <input 
                type="checkbox" 
                checked={props.item.complete}
                onChange={() => props.handleChange(props.item.id)}
                id={props.item.id}
            />
            <div className="text">
                <label 
                    className={textClass} 
                    htmlFor={props.item.id}
                >
                    {props.item.text}
                </label>
            </div>
        </div>
    )
}

export default TodoItem;