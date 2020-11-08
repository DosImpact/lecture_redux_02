import { TODO_TYPES } from "../_actions/types"
import { List, Map } from "immutable";

const { ADD_TODO, DEL_TODO } = TODO_TYPES;

const initialState = Map({
  todo: List([Map({
    id: 1, content: "hi"
  })]),
  number: 0
});

console.dir(initialState);

export default function counter(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      {
        const { id, content } = action.payload;
        return state
          .updateIn(["todo"], e => e.push(Map({ id, content })))
          .update("number", e => e + 1);
      }
    case DEL_TODO:
      {
        const { id } = action.payload;
        return state
          .updateIn(["todo"], e => e.filter(x => x !== id))
          .update("number", e => e - 1);
      }
    default:
      return state;
  }
};