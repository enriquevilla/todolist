import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import TodoInput from "./TodoInput/TodoInput";
import TodoButton from "./TodoButton/TodoButton";

// Random ID generator function
let ID = () => {
    return "_" + Math.random().toString(36).substr(2,9);
};

// Parse saved list to JSON if exists
const savedState = JSON.parse(window.localStorage.getItem("todos"));
let finalState = [];
if (savedState != null) {
    finalState = savedState;
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: finalState
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // Handle checkbox toggling
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(i => {
                if (i.id === id) {
                    i.complete = !i.complete;
                }
                return i;
            });
            return {
                todos: updatedTodos
            }
        })
    }

    // Handle removal of completed items
    handleClick() {
        this.setState(prevState => {
            const todosToComplete = prevState.todos.filter(i => {
                return !i.complete;
            })
            return {
                todos: todosToComplete
            }
        })
    }

    componentDidMount() {
        // Key event listener
        document.addEventListener("keydown", (event) => {
            let input = document.querySelector(".input-container > input"); 
            if (event.key === "Backspace") {
                input.value = input.value.slice(0, -1);
            } else if (event.key === "Enter"){
                const newTodo = {
                    id: ID(),
                    text: input.value,
                    complete: false
                };
                this.setState(prevState => {
                    prevState.todos.push(newTodo);
                    return {
                        todos: prevState.todos
                    }
                });
                input.value = "";
            } else if (/^[A-Za-z0-9!?.áéíóúñ]$/.test(event.key) || event.key === " "){
                input.value += event.key;
            }
        });
    }

    render() {
        // Save state to localStorage when rendering
        const savedState = JSON.stringify(this.state.todos);
        window.localStorage.setItem("todos", savedState);

        // Assign true to last item on list (CSS) and create components
        let mydata = this.state.todos.map(i => {
            if (i === this.state.todos[this.state.todos.length - 1]) {
                i.last = true;
            } else {
                i.last = false;
            }
            return <TodoItem
                key={i.id}
                item={i}
                handleChange={this.handleChange}
            />
        });

        // If no components, this text will be displayed
        if (mydata.length === 0) {
            mydata = 
                <p className="todos-empty">
                    To do list empty, add some items
                </p>;
        }

        // Render all components
        return (
            <div>
                <div className="todo-container">
                    {mydata}
                </div>
                <div className="input-container">
                    <TodoInput 
                        type="text" 
                        placeholder="Add item to list..."
                    />
                </div>
                <div className="button-container">
                    <TodoButton 
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default App;
