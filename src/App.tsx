import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import { v1 } from 'uuid';

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {
    //BLL( Business Logic Layer):
    const todoListTitle: string = 'What to learn';
    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Beer', isDone: true},
        {id: v1(), title: 'Cheese', isDone: true},
        {id: v1(), title: 'Fish', isDone: false},
    ])

    function removeTask(id: string) {
        let filteredTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(filteredTasks)
        console.log(tasks)
    }

    const addTask = (value:string) => {
        const newTask = {id: v1(), title: value, isDone: false}
        setTasks([newTask,...tasks])
    }

    let [filter, setFilter] = useState<FilterValueType>(`All`);

    let TasksForTodo = tasks;

    if (filter === `Active`) {
        TasksForTodo = tasks.filter((task) => {
            return !task.isDone
        })
        console.log(TasksForTodo)
    }
    if (filter === `Completed`) {
        TasksForTodo = tasks.filter((task) => {
            return task.isDone
        })
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    //GUI:
    return (
        <div className="App">
            <TodoList removeTask={removeTask}
                      title={todoListTitle}
                      tasks={TasksForTodo}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />

        </div>
    );
}

export default App;
