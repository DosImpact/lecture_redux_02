import { COUNTER_TYPES } from "./types"

const { DECREMENT, INCREMENT } = COUNTER_TYPES;

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
