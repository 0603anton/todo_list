import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    //BLL( Business Logic Layer):
    const todoListTitle: string = "What to learn";
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},

    ];

    const todoListTitle_2: string = "what to buy";
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "Beer", isDone: true},
        {id: 5, title: "Cheese", isDone: true},
        {id: 6, title: "Fish", isDone: false},

    ];
    //GUI:
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
