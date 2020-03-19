import React from "react";
import "./TodoInput.css";

class TodoInput extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <input 
                type={this.props.type}
                placeholder={this.props.placeholder}
                disabled
            >
            </input>
        )
    }
}

export default TodoInput;