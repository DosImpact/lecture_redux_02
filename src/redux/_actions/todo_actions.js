import { TODO_TYPES } from "./types"

const { ADD_TODO, DEL_TODO } = TODO_TYPES;

export const addTodo = (id, content) => ({
    type: ADD_TODO, payload: {
        id, content
    }
});
export const delTodo = (id) => ({ type: DEL_TODO, payload: { id } });
