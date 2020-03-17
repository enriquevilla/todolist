import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import data from "./TodoItem/TodoData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: data
        }
    }
    render() {
        const mydata = this.state.todos.map(i => {
            if (i === data[data.length - 1]) {
                i.last = true;
            }
            return <TodoItem
                key={i.id}
                text={i.text}
                complete={i.complete}
                last={i.last}
            />
        });
        return (
            <div>
                {mydata}
            </div>
        )
    }
}

export default App;
