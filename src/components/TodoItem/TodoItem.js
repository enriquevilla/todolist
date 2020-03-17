import React from "react";
import "./TodoItem.css";

let handleClick = () => {
    console.log("Clicked checkbox")
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: this.props.complete
        }
    }
    render () {
        return (
            <div className={(this.props.last) && "last"}>
                <input type="checkbox" checked={this.state.complete} onChange={handleClick}/>
                <span className="todo-text">
                    {this.props.text}
                </span>
            </div>
        )
    }
}

export default TodoItem;