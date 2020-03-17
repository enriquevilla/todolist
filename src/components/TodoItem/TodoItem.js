import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
    render () {
        return (
            <div className={(this.props.last) && "last"}>
                <input type="checkbox" checked={this.props.complete}/>
                <span className="todo-text">
                    {this.props.text}
                </span>
            </div>
        )
    }
}

export default TodoItem;