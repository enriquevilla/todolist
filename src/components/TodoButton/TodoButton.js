import React from "react";
import "./TodoButton.css"

class TodoButton extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <button 
                onClick={() => this.props.handleClick()}
            >
                {this.props.text}
            </button>
        )
    }
}

export default TodoButton;
