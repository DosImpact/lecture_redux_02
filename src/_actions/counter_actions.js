import { COUNTER_TYPES } from "./types"

export const increment = () => ({ type: COUNTER_TYPES.INCREMENT });
export const decrement = () => ({ type: COUNTER_TYPES.DECREMENT });
