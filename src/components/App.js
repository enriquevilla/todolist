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
        this.handleClickClean = this.handleClickClean.bind(this);
        this.handleClickClear = this.handleClickClear.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
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
    handleClickClean() {
        this.setState(prevState => {
            const todosToComplete = prevState.todos.filter(i => {
                return !i.complete;
            })
            return {
                todos: todosToComplete
            }
        });
        document.querySelector(".button-container > button").blur();
    }

    // Handle removal of all items
    handleClickClear() {
        this.setState({
            todos: []
        });
        document.querySelectorAll(".button-container > button")[1].blur();
    }

    // Handle keystrokes on desktop
    handleKeyDown(event) {
        let input = document.querySelector(".input-container > input"); 
        if (event.key === "Backspace") {
            input.value = input.value.slice(0, -1);
        } else if (/^[A-Za-z0-9!?.áéíóúñ]$/.test(event.key) || event.key === " "){
            input.value += event.key;
        }
    }

    componentDidMount() {
        // Key event listener and responsive use
        let input = document.querySelector(".input-container > input"); 
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
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
            }
        });
        if (window.innerWidth > 768) {
            document.addEventListener("keydown", this.handleKeyDown);
            document.querySelector(".input-container > input").setAttribute("disabled","");
        } else {
            document.removeEventListener("keydown", this.handleKeyDown);
            document.querySelector(".input-container > input").removeAttribute("disabled");
        }
        window.addEventListener("resize", (event) => {
            if (event.target.innerWidth > 768) {
                document.addEventListener("keydown", this.handleKeyDown);
                document.querySelector(".input-container > input").setAttribute("disabled","");
            } else {
                document.removeEventListener("keydown", this.handleKeyDown);
                document.querySelector(".input-container > input").removeAttribute("disabled");
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
                        text="Clean"
                        handleClick={this.handleClickClean}
                    />
                    <TodoButton
                        text="Clear all"
                        handleClick={this.handleClickClear}
                    />
                </div>
            </div>
        )
    }
}

export default App;
