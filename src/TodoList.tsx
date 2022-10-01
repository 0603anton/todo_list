import React from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

const TodoList = (props: TodoListPropsType) => {
    console.log(props)
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task: TaskType) => {
                    return <li key={task.id}><input type="checkbox" defaultChecked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => props.removeTask(task.id)}
                                style={{marginLeft: '15px'}}>X
                        </button>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={() => props.changeFilter('All')}>All</button>
                <button onClick={() => props.changeFilter('Active')}>Active</button>
                <button onClick={() => props.changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;