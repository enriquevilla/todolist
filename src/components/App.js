import React, { useState, useCallback, useEffect } from "react";
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

const App = () => {
    const [todos, setTodos] = useState(finalState);
    const [mydata, setMyData] = useState();

    // Handle checkbox toggling
    function handleChange(id) {
        setTodos(prevState => {
            const updatedTodos = prevState.map(i => {
                if (i.id === id) {
                    i.complete = !i.complete;
                }
                return i;
            });
            return updatedTodos;
        })
    }

    // Handle removal of completed items
    function handleClickClean() {
        setTodos(prevState => {
            const todosToComplete = prevState.filter(i => {
                return !i.complete;
            });
            return todosToComplete;
        });
        document.querySelector(".button-container > button").blur();
    }

    // Handle removal of all items
    function handleClickClear() {
        setTodos([]);
        document.querySelectorAll(".button-container > button")[1].blur();
    }

    const updateData = useCallback(() => {
        // Save data to local storage
        const savedState = JSON.stringify(todos);
        window.localStorage.setItem("todos", savedState);

        // Assign true to last item on list (CSS) and create components
        setMyData(todos.map(i => {
            if (i === todos[todos.length - 1]) {
                i.last = true;
            } else {
                i.last = false;
            }
            return <TodoItem
                key={i.id}
                item={i}
                handleChange={handleChange}
            />
        }));

        // If no components, this text will be displayed
        if (todos.length === 0) {
            setMyData( 
                <p className="todos-empty">
                    To do list empty, add some items
                </p>
            )
        }
    }, [setMyData, todos]);
  
    function handleEnter(event) {
        let input = document.querySelector(".input-container > input"); 
        if (event.key === "Enter") {
            const newTodo = {
                id: ID(),
                text: input.value,
                complete: false
            };
            setTodos(prevState => {
                prevState.push(newTodo);
                return prevState;
            });
            updateData();
        } else if (/[.]/.test(event.key)) {
            input.scrollLeft = input.scrollWidth;
        }
    }

    useEffect(() => {
        updateData();
    }, [updateData])

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
                    eventHandler={handleEnter}
                />
            </div>
            <div className="button-container">
                <TodoButton
                    text="Clean"
                    handleClick={handleClickClean}
                />
                <TodoButton
                    text="Clear all"
                    handleClick={handleClickClear}
                />
            </div>
        </div>
    )
}

export default App;
