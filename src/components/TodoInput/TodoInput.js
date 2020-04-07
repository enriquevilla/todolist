import React, { useState } from "react";
import "./TodoInput.css";

const TodoInput = (props) => {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleEnter(event) {
        if (event.key === "Enter") {
            setValue("");
        }
        props.eventHandler(event);
    }

    return (
        <input 
            type={props.type}
            placeholder={props.placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={handleEnter}
        >
        </input>
    )
}

export default TodoInput;