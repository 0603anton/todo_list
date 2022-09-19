import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
//CRUD
//create++
//read
//update
//delete

//virtualDOM

export type FilterValuesType = "all" | "active" | "completed";

function App() {
    //BLL( Business Logic Layer):
    const todoListTitle: string = "What to learn";
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 6, title: "Redux", isDone: false},
        {id: 10, title: "ReduxTLK", isDone: false},
    ])

    const [filter,setFilter] = useState<FilterValuesType>("all")

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }

    const changeFilter = (filter:FilterValuesType) =>{
        setFilter(filter);
    }

    //GUI:

    let tasksForTodoList = tasks;
    if(filter === "active"){
        tasksForTodoList = tasks.filter(t => !t.isDone);
    }
    if(filter==="completed"){
        tasksForTodoList = tasks.filter(t => t.isDone)
    }



    return (
        <div className="App">
            <TodoList
                tasks={tasksForTodoList}
                title={todoListTitle}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
