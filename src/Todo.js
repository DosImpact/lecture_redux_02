import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addTodo, delTodo } from "redux/_actions/todo_actions"

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo);
    console.log(todo)

    const handleAddTodo = () => { dispatch(addTodo(10, "lalalalla")) }
    const handleDelTodo = () => { dispatch(delTodo(10)) }
    return (
        <div>
            {todo.number}
            {todo.todo?.map(e => <div>{JSON.stringify(e)}</div>)}
            <div>
                <button onClick={() => { handleAddTodo() }}>Add todo</button>
                <button onClick={() => { handleDelTodo() }}>Del todo</button>
            </div>
        </div>
    )
}

export default Todo
