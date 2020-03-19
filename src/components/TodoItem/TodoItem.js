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
                    id={this.props.item.id}
                />
                <div className="text">
                    <label 
                        className={textClass} 
                        htmlFor={this.props.item.id}>
                        {this.props.item.text}
                    </label>
                </div>
            </div>
        )
    }
}

export default TodoItem;