import React from "react";
import "./TodoInput.css";

class TodoInput extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleEnter(event) {
        if (event.key === "Enter") {
            this.setState({
                value: ""
            });
        }
    }

    render() {
        return (
            <input 
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleEnter}
            >
            </input>
        )
    }
}

export default TodoInput;