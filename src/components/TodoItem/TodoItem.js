import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
    render () {
        let textClass = "todo-text";
        textClass += this.props.item.complete ? " complete" : "";
        return (
            <div className={(this.props.item.last) ? "last" : null}>
                <input 
                    type="checkbox" 
                    checked={this.props.item.complete}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <div className="text">
                    <span className={textClass}>
                        {this.props.item.text}
                    </span>
                </div>
            </div>
        )
    }
}

export default TodoItem;