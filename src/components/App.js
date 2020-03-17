import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import data from "./TodoItem/TodoData";

let mydata = data.map(i => {
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

class App extends React.Component {
    render() {
        return (
            <div>
                {mydata}
            </div>
        )
    }
}

export default App;