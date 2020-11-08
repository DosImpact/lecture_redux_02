import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.toJS());
    console.log(todo)
    return (
        <div>
            {todo.number}
            {todo.todo?.map(e => <div>{JSON.stringify(e)}</div>)}
        </div>
    )
}

export default Todo
