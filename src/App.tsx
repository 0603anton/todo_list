import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {
    //BLL( Business Logic Layer):
    const todoListTitle: string = 'What to learn';
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Beer', isDone: true},
        {id: 5, title: 'Cheese', isDone: true},
        {id: 6, title: 'Fish', isDone: false},
    ])

    function removeTask(id: number) {
        let filteredTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(filteredTasks)
        console.log(tasks)
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
                      changeFilter={changeFilter}/>

        </div>
    );
}

export default App;
