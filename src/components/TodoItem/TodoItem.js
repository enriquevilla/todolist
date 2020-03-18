import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
    render () {
        return (
            <div className={(this.props.item.last) && "last"}>
                <input 
                    type="checkbox" 
                    checked={this.props.item.complete}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <span className="todo-text">
                    {this.props.item.text}
                </span>
            </div>
        )
    }
}

export default TodoItem;