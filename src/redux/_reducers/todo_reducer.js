import { TODO_TYPES } from "../_actions/types"
import { List, Map, fromJS } from "immutable";

const { ADD_TODO, DEL_TODO } = TODO_TYPES;

const initialState = Map({
  todo: List([Map({
    id: 1, content: "hi"
  })]),
  number: 1
});

console.log(initialState);
console.log(initialState.toJS());
console.log(fromJS(initialState.toJS()));


export default function counter(state = initialState.toJS(), action) {

  switch (action.type) {
    case ADD_TODO:
      {
        const { id, content } = action.payload;
        return fromJS(state)
          .updateIn(["todo"], e => e.push(Map({ id, content })))
          .update("number", e => e + 1).toJS();
      }
    case DEL_TODO:
      {
        const { id } = action.payload;
        console.log(DEL_TODO, id)
        return fromJS(state)
          .updateIn(["todo"], e => e.filter(x => x.get("id") !== id))
          .update("number", e => e - 1).toJS();
      }
    default:
      return state;
  }
};