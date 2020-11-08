
import { COUNTER_TYPES } from "../_actions/types"


const initialState = {
  number: 0
};


export default function counter(state = initialState, action) {
  switch (action.type) {
    case COUNTER_TYPES.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case COUNTER_TYPES.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
};