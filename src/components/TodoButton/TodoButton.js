import React from "react";
import "./TodoButton.css"

const TodoButton = (props) => {
    return (
        <button 
            onClick={() => props.handleClick()}
        >
            {props.text}
        </button>
    )
}

export default TodoButton;
