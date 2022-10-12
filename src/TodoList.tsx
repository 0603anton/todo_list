import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (value: string) => void
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

const TodoList = (props: TodoListPropsType) => {
    const [inputValue, setInputValue] = useState(``);

    const onclickHandler = () => {
        props.addTask(inputValue)
        setInputValue(``)
    }

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onclickHandler()
        }

    }
    const changeFilter = (filtervalue: FilterValueType) => {
        props.changeFilter(filtervalue)
    }

    const removeTaskHandler = (taskId:string) => {
        props.removeTask(taskId)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input onKeyDown={onKeyPressHandler} value={inputValue} onChange={(event) => onchangeHandler(event)}/>
                <button onClick={onclickHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map((task: TaskType) => {
                    return (
                        <li key={task.id}><input type="checkbox" defaultChecked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={()=>removeTaskHandler(task.id)}
                                    style={{marginLeft: '15px'}}>X
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => changeFilter(`All`)}>All</button>
                <button onClick={() => changeFilter(`Active`)}>Active</button>
                <button onClick={() => changeFilter(`Completed`)}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;