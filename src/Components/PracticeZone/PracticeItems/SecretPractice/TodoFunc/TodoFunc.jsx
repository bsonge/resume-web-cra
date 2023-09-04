import React, { Fragment, useState } from "react";
import {Button} from "react-bootstrap";
import "./TodoFunc.scss";
import { Link } from 'react-router-dom';



function TodoFunc() {
    
    const [todo_list, todoListChange] = useState([]);
    const [todo_desc, todoDescChange] = useState("");

    let renderTodos = () => {
        console.log(todo_list);
        if(todo_list !== []) return todo_list.map((todo, index) => (
        <li key={index} className={todo.done ? 'td-done' : ''}  onClick={evt=>toggleItem(evt, index)}>
            {todo.desc}
        </li>)
        )
            
    }

    let addTodo = evt => {
        evt.preventDefault();
        if(todo_desc !== ""){ 
            todoListChange(prev => [
                ...prev,
                {
                    desc: todo_desc, 
                    done: false
                }
            ]);
        }
    }

    let toggleItem = (evt, index) => {
        evt.preventDefault();
        let prev = [...todo_list];
        prev[index].done = !prev[index].done;
        console.log(index, prev[index].done, todo_list)
        todoListChange(prev);
    }

    return (
        <Fragment>
            <h2>Todo Functional Component</h2>
            <div className="bzone-desc"><em>and here</em></div>
            <div className="stdw ">
                <form onSubmit={evt => addTodo(evt)}>
                    <input type="text" name="todo_desc" onChange={evt=>todoDescChange(evt.target.value)}/>
                    <input type="submit" name="submit"></input>
                </form>
                <div>todo_desc: {todo_desc}</div>
                <ul>
                    {renderTodos()}
                </ul>
            </div>
        </Fragment>
    )
}

export default TodoFunc;