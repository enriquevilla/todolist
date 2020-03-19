import React from "react";

class TodoButton extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <button onClick={() => this.props.handleClick()}>
                Remove completed items
            </button>
        )
    }
}

export default TodoButton;
