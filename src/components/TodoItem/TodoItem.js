import React from "react";
import "./TodoItem.css";

// let TodoItem = (props) => {
//     return (
//         <div className={(props.last) && "last"}>
//             <input type="checkbox" checked={props.complete}/>
//             <span className="todo-text">
//                 {props.text}
//             </span>
//         </div>
//     )
// }

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