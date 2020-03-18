import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import data from "./TodoItem/TodoData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: data
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const newTodos = prevState.todos.map(i => {
                if (i.id === id) {
                    i.complete = !i.complete;
                }
                return i;
            });
            return {
                todos: newTodos
            }
        })
    }

    render() {
        const mydata = this.state.todos.map(i => {
            if (i === data[data.length - 1]) {
                i.last = true;
            }
            return <TodoItem
                key={i.id}
                item={i}
                handleChange={this.handleChange}
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
